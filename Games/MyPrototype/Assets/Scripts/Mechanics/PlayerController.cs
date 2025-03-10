﻿using Platformer.Core;
using Platformer.Gameplay;
using Platformer.Model;
using System.Collections;
using System.Collections.Generic;
using System.Threading;
using UnityEngine;
using static Platformer.Core.Simulation;
using static TMPro.SpriteAssetUtilities.TexturePacker_JsonArray;

namespace Platformer.Mechanics
{
    /// <summary>
    /// This is the main class used to implement control of the player.
    /// It is a superset of the AnimationController class, but is inlined to allow for any kind of customisation.
    /// </summary>
    public class PlayerController : KinematicObject
    {
        public AudioClip jumpAudio;
        public AudioClip respawnAudio;
        public AudioClip ouchAudio;

        /// <summary>
        /// Max horizontal speed of the player.
        /// </summary>
        public float maxSpeed = 7;
        /// <summary>
        /// Initial jump velocity at the start of a jump.
        /// </summary>
        public float jumpTakeOffSpeed = 7;

        public JumpState jumpState = JumpState.Grounded;
        private bool stopJump;
        /*internal new*/ public Collider2D collider2d;
        /*internal new*/ public AudioSource audioSource;
        public Health health;
        public bool controlEnabled = true;

        bool jump;
        Vector2 move;
        SpriteRenderer spriteRenderer;
        internal Animator animator;
        readonly PlatformerModel model = Simulation.GetModel<PlatformerModel>();

        public Bounds Bounds => collider2d.bounds;

        void Awake()
        {
            health = GetComponent<Health>();
            audioSource = GetComponent<AudioSource>();
            collider2d = GetComponent<Collider2D>();
            spriteRenderer = GetComponent<SpriteRenderer>();
            animator = GetComponent<Animator>();
            print("hi???");

            //messing around, bouncing player on initialization
            this.Bounce(10);

            //make the player bounce a couple times
            //for(int i = 0; i<10; i++) {
            //    this.Bounce(2);
            //}

            //1. oof so that didn't work. maybe it glitched. not a glitch, i genuinely just didn't do it properly

            //bounce a few time AFTER he lands
            //if (this.IsGrounded)
            //{
            //    for(int i = 0; i < 5; i++)
            //    {
            //        this.Bounce(4);
            //        Thread.Sleep(2000); // wait 2 seconds
            //    }
            //}

            //2. that also didnt work
            // i need to use a Unity specific method. Intchresting. Unity works on 1 thread.

            ////bounce a few time AFTER he lands 
            //if (this.IsGrounded)
            //{
            //    for (int i = 0; i < 5; i++)
            //    {
            //        this.Bounce(4);
            //        //Thread.Sleep(2000); // wait 2 seconds
            //        yield return new WaitForSeconds(2);// this is a weird calling. i've never seen this.
            //    }
            //}

            // 3. Nevermind, this also won't work bc Awake can't be an iterator block.
            Debug.Log("1");
            StartCoroutine(this.JumpingJacks());
            Debug.Log("4");
        }

        IEnumerator JumpingJacks()
        {
            Debug.Log("2");
            int i = 0;
            while (i != 10) 
            {
                Debug.Log("i: "+i);
                yield return new WaitUntil(() => this.IsGrounded == true);
                this.Bounce(6);
                i++;
            }
            Debug.Log("3");
        }

        protected override void Update()
        {
            if (controlEnabled)
            {
                move.x = Input.GetAxis("Horizontal");
                if (jumpState == JumpState.Grounded && Input.GetButtonDown("Jump"))
                    jumpState = JumpState.PrepareToJump;
                else if (Input.GetButtonUp("Jump"))
                {
                    stopJump = true;
                    Schedule<PlayerStopJump>().player = this;
                }
            }
            else
            {
                move.x = 0;
            }
            UpdateJumpState();
            base.Update();
        }

        void UpdateJumpState()
        {
            jump = false;
            switch (jumpState)
            {
                case JumpState.PrepareToJump:
                    jumpState = JumpState.Jumping;
                    jump = true;
                    stopJump = false;
                    break;
                case JumpState.Jumping:
                    if (!IsGrounded)
                    {
                        Schedule<PlayerJumped>().player = this;
                        jumpState = JumpState.InFlight;
                    }
                    break;
                case JumpState.InFlight:
                    if (IsGrounded)
                    {
                        Schedule<PlayerLanded>().player = this;
                        jumpState = JumpState.Landed;
                    }
                    break;
                case JumpState.Landed:
                    jumpState = JumpState.Grounded;
                    break;
            }
        }

        protected override void ComputeVelocity()
        {
            if (jump && IsGrounded)
            {
                velocity.y = jumpTakeOffSpeed * model.jumpModifier;
                jump = false;
            }
            else if (stopJump)
            {
                stopJump = false;
                if (velocity.y > 0)
                {
                    velocity.y = velocity.y * model.jumpDeceleration;
                }
            }

            if (move.x > 0.01f)
                spriteRenderer.flipX = false;
            else if (move.x < -0.01f)
                spriteRenderer.flipX = true;

            animator.SetBool("grounded", IsGrounded);
            animator.SetFloat("velocityX", Mathf.Abs(velocity.x) / maxSpeed);

            targetVelocity = move * maxSpeed;
        }

        public enum JumpState
        {
            Grounded,
            PrepareToJump,
            Jumping,
            InFlight,
            Landed
        }
    }
}