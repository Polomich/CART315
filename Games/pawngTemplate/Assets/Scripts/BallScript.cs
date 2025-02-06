using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Random = UnityEngine.Random;

public class BallScript : MonoBehaviour
{
    private Rigidbody2D rb;
    public float ballSpeed;
    public float maxSpeed = 10f;
    public float minSpeed = 2f;

    //Color vars
    SpriteRenderer m_SpriteRenderer;
    Color m_White = new Color(255, 255, 255, 255);
    Color m_Purple = new Color(204, 153, 255, 255); 
    Color m_Pink = new Color(225, 182, 208, 255);
    Color[] colors;

    //public AudioSource scoreSound, blip;

    public int leftPlayerScore, rightPlayerScore;


    private int[] dirOptions = { -1, 1 };
    private int hDir, vDir;


    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();

        //get spiriterenderer
        Color[] colors = new Color[] { m_White, m_Purple, m_Pink };
        m_SpriteRenderer = GetComponent<SpriteRenderer>();

        Reset();
    }


    // Start the Ball Moving
    private IEnumerator Launch()
    {
        yield return new WaitForSeconds(1.5f);

        // Figure out directions
        hDir = dirOptions[Random.Range(0, dirOptions.Length)];
        vDir = dirOptions[Random.Range(0, dirOptions.Length)];

        // Add a horizontal force
        rb.AddForce(transform.right * ballSpeed * hDir); // Randomly go Left or Right
        // Add a vertical force
        rb.AddForce(transform.up * ballSpeed * vDir); // Randomly go Up or Down

        yield return null;
    }

    public void Reset()
    {
        rb.linearVelocity = Vector2.zero;
        ballSpeed = 20;
        transform.position = new Vector2(0, -2);
        StartCoroutine("Launch");
    }

    // if the ball goes out of bounds
    private void OnCollisionEnter2D(Collision2D other)
    {
        Debug.Log("bonk?");

        //change color to something random
        m_SpriteRenderer.color = m_Purple;//colors[Random.Range(0, colors.Length)];


        // did we hit a wall?
        if (other.gameObject.tag == "Wall")
        {
            // make pitch lower
            //blip.pitch = 0.75f;
            //blip.Play();
            SpeedCheck();
        }

        // did we hit a paddle?
        if (other.gameObject.tag == "Paddle")
        {
            // make pitch higher
            //blip.pitch = 1f;
            //blip.Play();
            SpeedCheck();
        }

        // did we hit the left Wall?
        if (other.gameObject.name == "leftWall")
        {
            rightPlayerScore += 1;
            Reset();
        }

        // did we hit the right Wall?
        if (other.gameObject.name == "rightWall")
        {
            leftPlayerScore += 1;
            Reset();
        }
    }

    private void SpeedCheck()
    {
        Debug.Log("bonk!");

        // Prevent ball from going too fast
        if (Mathf.Abs(rb.linearVelocity.x) > maxSpeed) rb.linearVelocity = new Vector2(rb.linearVelocity.x * 0.99f, rb.linearVelocity.y);
        if (Mathf.Abs(rb.linearVelocity.y) > maxSpeed) rb.linearVelocity = new Vector2(rb.linearVelocity.x, rb.linearVelocity.y * 0.99f);

        if (Mathf.Abs(rb.linearVelocity.x) < minSpeed)
        {
            Debug.Log("too slow?");
            rb.linearVelocity = new Vector2(rb.linearVelocity.x * 1.1f, rb.linearVelocity.y);
        }

        if (Mathf.Abs(rb.linearVelocity.y) < minSpeed)
        {
            Debug.Log("too slow?");
            rb.linearVelocity = new Vector2(rb.linearVelocity.x, rb.linearVelocity.y * 1.1f);
        }


        // Prevent too shallow of an angle
        if (Mathf.Abs(rb.linearVelocity.x) < minSpeed)
        {
            // shorthand to check for existing direction
            rb.linearVelocity = new Vector2((rb.linearVelocity.x < 0) ? -minSpeed : minSpeed, rb.linearVelocity.y);
        }

        if (Mathf.Abs(rb.linearVelocity.y) < minSpeed)
        {
            // shorthand to check for existing direction
            rb.linearVelocity = new Vector2(rb.linearVelocity.x, (rb.linearVelocity.y < 0) ? -minSpeed : minSpeed);
        }

        Debug.Log(rb.linearVelocity);

    }


}
