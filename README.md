# RPG-Challenge
[Here](https://rasamizafyb.github.io/RPG-Challenge/) you can see our project, the online store og the brand **RPG-CHALLENGE**.

At the end of the JS course, we were challenged on our skills.
We were asked to make a little game using **HTML**, **CSS/SASS** and **JS**.

This project allowed us to use the skills acquired from **HTML**, **CSS/SASS** and and especially in **JS** since
the beginning of the training. But also allowed us to learn something nex to increase our skills.

Below you can see the different people who are working together to cary out this project

We have divided the tasks so that everyone touches a little on everything.
Unfortunately we lost a member during the mission due to a medical cause.



# Specifications
|Challenge Parameters  |Challenge Details              |
|:---------------------|:------------------------------|
|Repository            |`js-rpg`                       |
|Challenge type        |`Consolidation`                     |
|Duration              |`4 days`                       |
|Deadline              |`19/06/2020 17h00`             |
|Deployment method     |`GitHub pages`                 |
|Group composition     |`SCOTT`, `KIM` and `BRYAN`                          |
|Submission's form     | [Google form](https://docs.google.com/forms/d/1UeZtLm-oZE2x0UzRfKArJomTI04DOWRg0wL4QF8QAJI/edit?usp=sharing) |

## The stats

Each calculation should run for one attack. For instance, if I have a bow and decide to attack. I might get lucky and strike twice.
If the opponent wears boots, he could dodge the attack twice, once or never.


| ITEMS | Boots                                | Staff                  | Sword           | Bow                          |
|-------|--------------------------------------|------------------------|-----------------|------------------------------|
|       | 30% chance to dodge an attack        | 20% increase in healing| 30% more damage | 30% chance to attack twice   |

<br>

| RACE | Humans               | Orcs                    | Elves                                                         | Vampires                                                |
|------|----------------------|-------------------------|---------------------------------------------------------------|----------------------------------------------------|
|      |20% less damage taken |40% more max health      | 30% chance to deflect the attack back to the opponent. The attacker takes damage equal to 50% of the original hit. The elf takes no damage. |10% lifesteal from opponents current health at start of the vampire's turn. |

## Part 1

**Challenge 1:**

Create an HTML page with the following elements included:

* A title.
* An element to display both characters stats (visual, name, item, health...) [Something like a VS screen](https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/2050964/910/607/m1/fpnw/wm0/sample8-.jpg?1482262310&s=b524ce6f06ee59486cfa7ffa7a78ad99)
* A panel with 6 buttons, 3 for each player (hit, heal & yield. Those are the moves.)
* A creation panel with inputs & dropdowns to create your character. (For now only name, items and race )
* A log that will tell you which move the player made.

**Challenge 2:**  

Use the character.js file and save the inputs inside variables/an object, and use them to initiate new characters for both players.

**Challenge 3:**

Make sure that only the title, VS screen and the input field are visible when creating the characters.

**Challenge 4**

When the characters are created, the creation panel should disappear. After this, the `moves` & `log` panel should appear.

**Challenge 5**

Display the health bar of both players this should work real-time.
Make sure it has a decrease/increase animation
Make use of max-health and currentHealth.

## Part 2


**Challenge 1:**

Create a js file named `gamelogic.js`. You are in charge of writing the game itself.
Take a look at the `character.js` file you will have to use it.

**Note**: You will have to work with this file as well. Its up to you to find out what belongs where.

**Challenge 2:**

Initiate a temporary character. We will use this to test our game logic.

**Challenge 3:**

Write a function that will handle the races. This will only run once.

**Challenge 4:**

Write a function that will handle the items. This will be called everytime we make a move. 

**Challenge 5:**

Make the functions work with the character. See if the stats change on creation.

**Challenge 6:**

Lower the health of your object and create a healing function that will use the `heal` function. (character.js)
Make it so the function uses a random number between the minHealing and maxHealing.

**Note:** The `currentHealth` should **NEVER** go above the `maxHealth`

## The Boss

We are almost finished. There are still some things to tackle.

Here is a list of what you should work out:

* Combine the code + html for some 'working result'.
* Inputs should generate the characters stats.
* Work out the attack function (Almost the same as heal but it has to hit the enemy).
* When a player loses, display a victory message & a loose message for each player.
* At the end of the game, you should be able to restart the game to create a new character.

## The final encounter

* Style this arena to your taste.
* Add extra functions. (Keep it appropriate.)
* Prepare to present your work.




