Folder for process documentation.


# Process Journal
## Index
1. [Week 1](https://github.com/Polomich/CART315/blob/main/Process/README.md#week-1-make-a-tiny-game-january-23-2025)
2. [Week 2](https://github.com/Polomich/CART315/blob/main/Process/README.md#week-2-exploration-protoype-i-january-29-2025)
3. [Week 3](https://github.com/Polomich/CART315/blob/main/Process/README.md#week-3-exploration-prototype-ii-february-6-2025)
4. [Week 4](https://github.com/Polomich/CART315/blob/main/Process/README.md#week-4-exploration-prototype-iii-february-13-2025)
5. [Week 5](https://github.com/Polomich/CART315/blob/main/Process/README.md#week-5-exploration-prototype-iiii-february-20-2025)
6. [Week 6](https://github.com/Polomich/CART315/blob/main/Process/README.md#week-6-iterative-prototype-i-march-6-2025)
7. [Week 7](https://github.com/Polomich/CART315/blob/main/Process/README.md#week-7-iterative-prototype-ii)
8. [Week 8](https://github.com/Polomich/CART315/blob/main/Process/README.md#week-8-iterative-prototype-iii)
9. [Week 9](https://github.com/Polomich/CART315/blob/main/Process/README.md#week-9-iterative-prototype-iv)
10. [Week 10](https://github.com/Polomich/CART315/blob/main/Process/README.md#week-10-iterative-prototype-v)

## Week 10: Iterative Prototype V


## Week 9: Iterative Prototype IV


## Week 8: Iterative Prototype III

### Making Levels

Messing around and testing the "pixel-art-ity" of the game  
<img width="512" alt="image" src="https://github.com/user-attachments/assets/50f69501-7f49-4da6-8695-cf001d6686f0" />  

How does one design a beginner level that is both easy to complete but not boring?
Some inspiration:  
<img width="1054" alt="image" src="https://github.com/user-attachments/assets/a49a0982-6a2e-4486-b2a1-0cbc362e6019" />

Thinking of it, it might be really difficult to remember where exactly the pixels are. 
So to make it easier, the outline of the shape will be grayed in.  
Like this:  
<img width="231" alt="image" src="https://github.com/user-attachments/assets/e4655eba-27cb-4cb8-aad7-e7eb8ae42365" /> <img width="237" alt="image" src="https://github.com/user-attachments/assets/b6f8a44c-90c1-4eb5-855a-4d1f6c0e0477" />

Looking back at it, white tiles might be a problem with such a pale background.


### Adding features

While discussing games with a classmate last class, we started talking about Battleship.  
It got me thinking, a lot of games with a square-divided board distinguish the positions on the board by giving them coordinates.  
<img width="666" alt="image" src="https://github.com/user-attachments/assets/b054cb18-ba77-4d84-8baa-2250d2629529" />
(https://en.wikipedia.org/wiki/Battleship_%28game%29)

![image](https://github.com/user-attachments/assets/92c7f0e4-615c-4730-8eeb-92193445e6e9)
(https://www.chess-universe.shop/blogs/news/lets-do-some-chess-puzzles)


Now, I am too lazy to go write all the x and y coordinates. So we're going to spend the next 10min writing code to do something that I would've taken 2min to do by hand.  
<img width="603" alt="image" src="https://github.com/user-attachments/assets/2245868c-c00f-4cbb-a149-c26efbab5451" />

.... How do you iterate an alphabet ....

This is how: https://www.geeksforgeeks.org/javascript-program-to-print-alphabets-from-a-to-z-using-loop/

<img width="550" alt="image" src="https://github.com/user-attachments/assets/dff18126-270b-48b4-933d-2882e8481fd8" />  

Well, that was way quicker and easier than I thought.


## Week 7: Iterative Prototype II

### This week will focus on digital prototyping
After a lot trial and error (and cursing out flexbox for the nth time) I managed to create this during last week's lab:
<img width="1109" alt="image" src="https://github.com/user-attachments/assets/99e7a67b-088c-405b-9606-2b8e8249ba48" />
The colors just being place-holders. It took all the patience I hade to center the grid in the middle. 

For initial prototyping purposes, I decided to make the squares clickable instead of drag and dropping the pixel from the sidebar. 

After much confusion (and forgetting what I named my variables) we have clickable tiles:
![Recording2025-03-13144014-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/ddc75ac8-fd84-4239-9d2a-df7a40ed214d)

### Time to make a sidebar that doesnt bring shame upon my family.
hmmm i can't work with this color palette. It was nice for testing but it's starting to bother me. 
Heading over to https://coolors.co/palettes/trending to find a palette.

Some nice palettes:  
![image](https://github.com/user-attachments/assets/57fb743b-5288-4943-a46a-1711f7104c8f)  
<img width="400" alt="image" src="https://github.com/user-attachments/assets/7e2e0c64-6f74-4338-9e3e-0e7eada9e4dd" />
<img width="400" alt="image" src="https://github.com/user-attachments/assets/4bc23cff-cfad-4121-b90f-da0d0ff3da57" />  
I like pastels, and I do like these colors, but they might be too muted for the pixel pictures.

This one speaks to me:  
![image](https://github.com/user-attachments/assets/c2f4f92a-6e07-481d-8c83-7d532cbb0d0f)  

but does it fit the theme?
(the theme being animal and nature if I haven't mentioned it yet. Might have kept that thought locked in.)

Looking for some more greenery:  
![image](https://github.com/user-attachments/assets/224d5691-9e18-48ed-8c17-9fe52458fcb0)

Switched some colors, I like this look a lot better:  
<img width="758" alt="image" src="https://github.com/user-attachments/assets/6e336282-e457-4eaa-9ff5-b2e2a1df5cad" />

Tried to look at some sidebar inspo. Why are all of these so boring.  
<img width="733" alt="image" src="https://github.com/user-attachments/assets/28366dbb-bbcc-430e-ab3e-3c851771a186" />

Not entirely appplicable for my context but a good example to follow:    
<img width="538" alt="image" src="https://github.com/user-attachments/assets/93b45262-a1ba-4293-905c-5a5029a2e15b" />  
https://www.behance.net/gallery/175538095/Sidebar-menu?tracking_source=search_projects|sidebar+ux&l=7

Now why is H1 smaller than H2  
<img width="479" alt="image" src="https://github.com/user-attachments/assets/27f025a9-605e-456f-aefe-9f5cc7fa7c57" />  
Nothing here makes sense  
<img width="273" alt="image" src="https://github.com/user-attachments/assets/0a6c720a-e58a-43e7-96e4-b58ce963c931" />
<img width="376" alt="image" src="https://github.com/user-attachments/assets/3c59a1d7-4cfe-4209-b01f-a8685c56cb97" />

We got a sidebar going  
<img width="232" alt="image" src="https://github.com/user-attachments/assets/395fd4e3-33cc-41db-84cf-c7757e3146ab" />

### Some comparisons 
<img width="226" alt="image" src="https://github.com/user-attachments/assets/c90c283c-b7b4-4036-a830-8795f6ff976f" />  

| Like | Dislike | Comment |
| --- | --- | --- |
| Colors are harmonious | Not enough contrast | Make bg lighter? |

<img width="335" alt="image" src="https://github.com/user-attachments/assets/ee00b59b-03b0-4115-9358-59eafa021aea" />

| Like | Dislike | Comment |
| --- | --- | --- |
| Good contrast | I really dont like that bg color | keep this light, but diff shade |

<img width="337" alt="image" src="https://github.com/user-attachments/assets/51305cd3-5316-4edc-a392-84a613a78c6c" />  

| Like | Dislike | Comment |
| --- | --- | --- |
| Good contrast, good harmony |  | I went back to the bg i liked and made the text darker instead |

Now the tiles border are way too dark and also clash with the color scheme.  
<img width="376" alt="image" src="https://github.com/user-attachments/assets/d3f2a8ae-ef85-4b56-8b40-87658c7be410" />
Better.

## Week 6: Iterative Prototype I (March 6, 2025)
<img width="530" alt="image" src="https://github.com/user-attachments/assets/8672ac24-da19-4901-979a-b5ad2fe61138" />

<img width="494" alt="image" src="https://github.com/user-attachments/assets/28eec967-8807-4c02-bf06-a1f7e6020b16" />

<img width="878" alt="image" src="https://github.com/user-attachments/assets/73e3ffe5-5c5a-44ee-8af0-0b7c6da630b9" />

<img width="487" alt="image" src="https://github.com/user-attachments/assets/299b93f0-7518-4c8f-a769-0d5c92ee33c4" />

<img width="374" alt="image" src="https://github.com/user-attachments/assets/88aeff90-6478-4deb-9ba9-b95c71c2b6c2" />

<img width="379" alt="image" src="https://github.com/user-attachments/assets/3025c400-2989-441d-a860-eb80a24ae9f3" />

<img width="365" alt="image" src="https://github.com/user-attachments/assets/1de51341-000e-4f5e-87fa-809a1c568df9" />

<img width="335" alt="image" src="https://github.com/user-attachments/assets/59d2e065-8791-4783-ae55-6c6c24bd6742" />


## Week 5: Exploration Prototype IIII (February 20, 2025)

### Prototyping on Paper part 2

![image](https://github.com/user-attachments/assets/da805cd6-00ff-4f6f-afd7-10b9af100884)

![image](https://github.com/user-attachments/assets/c60a2d5b-65dd-4433-8fb6-ad313eec5845)

![image](https://github.com/user-attachments/assets/6ea985eb-d2d0-4642-b0f5-2d0d04bf3596)

![image](https://github.com/user-attachments/assets/05e14619-f965-485b-b2c6-34470c62dc50)

List of endangered species: https://www.worldwildlife.org/species/directory?direction=desc&sort=extinction_status
<img width="534" alt="image" src="https://github.com/user-attachments/assets/61358dc6-ae86-4366-8966-f55b4f521871" />

<img width="578" alt="image" src="https://github.com/user-attachments/assets/535c5b1d-0df6-478f-ade6-d1e2fcc2d855" />

<img width="562" alt="image" src="https://github.com/user-attachments/assets/7e2198b4-57dd-4327-813b-404f2156dfe4" />

<img width="526" alt="image" src="https://github.com/user-attachments/assets/15a7d670-0305-4a4a-ae2d-06431c6667a1" />

<img width="990" alt="image" src="https://github.com/user-attachments/assets/7e458135-e78c-4da6-9aff-236f99f8d905" />



## Week 4: Exploration Prototype III (February 13, 2025)

### Prototyping on Paper

Yet again I am burdened with a game that doesn't work (the ball doesn't move, I don't know how to make the paddle move either.)

So we are working with paper and our imagination this week. 

<img width="809" alt="image" src="https://github.com/user-attachments/assets/7c94579d-1ba7-4990-be84-85ba3d6bc077" />

![image](https://github.com/user-attachments/assets/b130eb40-e186-4ef9-a521-aacd072bfacf)

![image](https://github.com/user-attachments/assets/389b4ffc-80a0-439a-ac91-f099e7af47b9)

![image](https://github.com/user-attachments/assets/1e952112-2d02-4c58-959d-336e16e0b52c)

![image](https://github.com/user-attachments/assets/0583ec4d-19ae-43ac-9c13-02ec7b8287bb)



## Week 3: Exploration Prototype II (February 6, 2025)

### How to fix a broken game?

1. My walls are not walling. why.
   - Trying to add Rigid Body 2D, conflicting with Box Collider
   - Deleted Box Collider and replaced with Box Collider 2D
   - Added RigidBody 2D

  - OMG it did bonk! oops i left my wall too far down. game broke.  
    -> blip hasn't been assigned (i forgot it?)

2. Sound
   - going to ignore it for bc wow what an annoying sound.

4. Ball bouncing physics is not working
   - yea no, i don't know how to fix that
  
### How to add features?

1. Random color changing on bonking a wall
   - Managed to get the color to change on bonk But why is it always white?
   - wait not it *does* change color, but not in the gameplay
![image](https://github.com/user-attachments/assets/8e5f3386-4b74-4f2c-a0f2-bb0b6a752719)

## Conclusion
- Nothing worked this week. I am tired. 


## Week 2: Exploration Protoype I (January 29, 2025)

### How do you use Unity?

I tried to install Unity last week with multiple fails. I did not have it installed on time for the lab demo and had to leave class early for a meeting.  
Meaning I am on my owm for this.

I'm too scared to start a project from scratch but I saw that there are templates I can use under the education tab.  
I picked the platformer. Let's see what I can play around with.

Picking a script to go mess with.  
Why can't I edit in Unity.  
Oh that's just the inspector.

Oh no VS needs to install things. Oh that was fast.

Nevermind it's gonna take forever.  
<img width="553" alt="image" src="https://github.com/user-attachments/assets/7b1ca314-1512-43be-b716-b1cfe395925d" />  

What is Awake, and why is not referenced anywhere?  
--> Initializer for an object.

1. First trial: changing the player color. That should be easy.
- can't find where the player color is stored.
- gonna try something else.

Insight: The player color is not set by code by image.  
Insight Correction: the player is a white colored sprite. Yet to find where the turquoise color comes from. 

2. Make the player bounce on Initialization.
- Found where the player Awakes
- The jumping methods look complicated
- I made the player Bounce!

Insight: Awake() is an initialization method in Unity. There is velocity math involved in jumping and moving around.  

3. Make the player bounce a certain amount of times using a for loop.  
<img width="593" alt="image" src="https://github.com/user-attachments/assets/b9635f97-4fc4-48a8-a708-acd77b852b36" />

As seen by my documentation, it did not work very well.

Insights: Awake() cannot contain a loop. ThreadSleep() does not work in Unity. 

<img width="543" alt="image" src="https://github.com/user-attachments/assets/ccbc260f-0d3c-449e-b45c-cfaababb5492" />

Insights correction: the loop is not the problem. WaitForSecond returns something but the return type of Awake() is void so it's not compatible.  

<img width="541" alt="image" src="https://github.com/user-attachments/assets/2b6bcb6d-87f5-4dda-9aa9-36bf11585b8a" />  

This also didn't work.  
Maybe changing it to real seconds?  
<img width="528" alt="image" src="https://github.com/user-attachments/assets/65423f58-70b2-4f5f-a54e-87a80e661da4" />

This also did not work.

After inserting a bunch of print statements, I figured JumpingJacks was not being reached. Maybe I'm not calling it right?

<img width="611" alt="image" src="https://github.com/user-attachments/assets/ad917c9d-e0ea-4620-b1d9-6bcfe737a52e" />

Still not working.

![image](https://github.com/user-attachments/assets/721c640b-45e1-425e-9395-79dfdf5e985b)
<img width="268" alt="image" src="https://github.com/user-attachments/assets/4bf70d7a-1d77-4012-a783-7773f39438f2" />

So none of that worked bc it needs to be inside of a Coroutine. What the hell is a Coroutine.

<img width="510" alt="image" src="https://github.com/user-attachments/assets/f410c316-d8ae-428f-9f1d-9726829d7e61" />

YESSSSS GORGEOUS DAY  
ITS ALIVE!!!!!!!!!

4. Time to try something else. Bounce with WaitUntil() to perfect it.

<img width="497" alt="image" src="https://github.com/user-attachments/assets/f67272d5-b3a4-440e-8089-4b6dc5fd1be0" />

This worked but the player only jumped twice. It did jump as soon as it hit the ground.  
Need to try adding more jumps and more velocity.

![image](https://github.com/user-attachments/assets/02572595-c463-427f-b0e4-0510d36192e3)

Player jumps high, but only 3 times. Does my iterator continue on its own while player is jumping? Is the velocity not strong enough to bounce again?

<img width="500" alt="image" src="https://github.com/user-attachments/assets/0da07acb-205b-4b01-8e14-6a227b61ea28" />   
<img width="221" alt="image" src="https://github.com/user-attachments/assets/93ded57f-b879-4bb2-9e13-c00dced46b63" />

Every jump, the iterator goes up a few times.

![image](https://github.com/user-attachments/assets/0a6dfd7c-ad80-4d1e-9555-522ed40fe4e1)

This while loop did not change the outcome.

### So, what now?
- Do more research on how Unity works.
- Ask!
- Try to create something from scratch. 


## Week 1: Make a tiny game (January 23, 2025)

### How do you make a game with an engine you've never used?

I started by opening Twin.
I thought the process of creating new things would be intuitive.
I mean, there are buttons to create new passages.
Why can't I connect anything???

Time to look for instructions.
I cannot find where is the Cookbook. I am exactly where on the page that I was directed to open.
After some more snooping (and actually opening the window in fullscreen) I found the tab for starting out.

Ooo I can make thins bold! This will come in handy.
I made my first connection. I this point, I'm not entirely sure where I want my story to go.

![img1](Images/Screenshot1.png)

I make the simplest thing I know.
Waking up.
Within the first few minutes of consciousness every morning, I am already making decisions.

![img2](Images/Screenshot2.png)

Testing to see how it looks.
I like it.
I do not know what all the variables at the bottom of the screen are. They will be a future problem, once I figure out this engine.
Usually, I would've already started messing with the HTML and styling. But learning from my past mistakes (and being told often that I'm focusing on the wrong thig) I'm going to write before I do the visuals.

![img3](Images/Screenshot3.png)

The options are also working fine.

![img4](Images/Screenshot4.png)

So far the tree isn't too complicated.
But I didn’t realize that I 2 options named the same way would point to the same place.
That is troublesome. I have to find a way to differentiate them.

![img5](Images/Screenshot5.png)

I don't like that I have to rename my squares, but it does push me to come up with more creative ways to name them.

![img6](Images/Screenshot6.png)

I'm thinking of the options as I type them. Trying to keep everything organized.
The squares are in arranged in columns where the actions are similar. For examples of the different ways to catch a bus are in the same column but all belong to different roads. When a story option doesn't progress much (or there is only 1 option) the following square is added right below the previous.

![img7](Images/Screenshot7.png)

Here I am testing out so routes. For some reason, this option leads to nowhere even though the plan clearly shows that there is a following.

![img8](Images/Screenshot8.png)

I forgot to refresh the browser. Moving on. Nothing to see here.

![img9](Images/Screenshot9.png)

After testing out all the routes, I realized that refreshing the page or clicking the arrows to get to the beginning is too much effort. I added a final state that will help loop back to the start.

![img10](Images/Screenshot10.png)

The final game is just a short story that shows how there really isn't a happy ending. All options have their drawbacks. It is based on my Thursday mornings. They are hell. I can either get a bit more sleep but be late and hungry to class. Or waking up on time but be in pain from sleep deprivation.

### Play Testing

Game got play tested in class by 1 person.

Subject played the game over and over until they got all the routes.
Subject reported that they expected there to be a perfect ending --> BUT that does not indicate that this is a bad game. It is just what they are used to.

I told them that there isn't one. This game is based on my life. Life isn't perfect. I am in pain every Thursday.
There isn't a perfect ending because I myself don't know how to get there. Let me know if you figure it out.

### Where to find it
- the raw HTML file on GitHub: https://github.com/Polomich/CART315/blob/main/Games/Morning.html
- play the game directly on itch.io: https://polomich.itch.io/morning
