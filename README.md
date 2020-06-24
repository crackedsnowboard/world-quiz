# World Quiz
Creating a quiz about random world facts. I primarily used Javascript and dynamically rendered HTML through the DOM. 

## User Story
When a user arrives to the page, the user is presented with instructions about the game and a button to start. Upon clicking the button the following occurs in the application:

* Timer starts and user is presented with questions
* Clicking on an answer will dynamically render another set of questions
* Incorrect answers result in time being subtracted from the clock
* When all questions are answered or the timer reaches 0 the game is over
* The user can save initials and score

## Code Strategy
I used createElements and setAttributes in Javascript to hide and show new questions. I also added eventListners to dynamically change the page based on a users click. I tried to deploy the game on one HTML document, one CSS style sheet and a single javascript script doing the heavy lifting. 

### Link to deployed World Quiz game
[World-Quiz](https://crackedsnowboard.github.io/world-quiz/)


#### Image of deployed web applicaton
<img src="images/application-picture.png">



#### Author Links
[LinkedIn](linkedin.com/in/joel-mathen/)
[GitHub](https://github.com/crackedsnowboard)