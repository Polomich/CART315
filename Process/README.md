Folder for process documentation.

Commits legend:
- feat -> feature
- proc -> process

# Process Journal

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
