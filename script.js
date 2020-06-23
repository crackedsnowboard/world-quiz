
//  Create global variables  here 
// store scores
var highScore = 0;
var questionNumber = 0;
var secondsLeft = 10;
var timeElement = document.querySelector("#timer");
var startButton = document.querySelector("#commence");
var mainPage = document.querySelector("#main");
var questionsDiv = document.querySelector("questions")
console.log(mainPage);

// document.querySelector etc

// creat an object of questions
var gameConstruct = {
questions: ["The population of the United States is:", "The population of China is:",  "Which country is expected to have the larget population by 2050?", "Which river is the longest in the world?", "Chillis are native to which continent?"],
answerRowOne: ["50 million", "100 million", "Unites States", "Mississippi", "North America"],
answerRowTwo: ["270 million", "400 million", "China", "Nile", "Africa"],
answerRowThree: ["330 million", "1.4  billion", "Nigeria", "Amazon", "Asia"],
answerRowFour: ["400 million", "1.9 billion", "India", "Ganges", "Europe"], 
}


// ["The population of the United States is:", "The population of China is:",  "Which country is expected to have the larget population by 2050?", "Which river is the longest in the world?", "Chillis are native to which continent?",];





// couldn't figure out how to iterate over a object
//   { q: "The population of the United States is:", a1: "50 million", a2: "270 million", a3: "330 million", a4: "400 million" },
//   { q: "The population of China is:", a1: "100 million", a2: "400 million", a3: "1.4  billion", a4: "1.9 billion" },
//   { q: "Which country is expected to have the larget population by 2050?", a1: "Unites States", a2: "China", a3: "Nigeria", a4: "India" },
//   { q: "Which river is the longest in the world?", a1: "Mississippi", a2: "Nile", a3: "Amazon", a4: "Ganges" },
//   { q: "Chillis are native to which continent?", a1: "North America", a2: "Africa", a3: "Asia", a4: "Europe" }
// ];


function playGame() {

  if (questionNumber > (questions.length)) {
    gameOver()
  } else {
    askQuestion();
    questionNumber++
  }
}

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeElement.textContent = "Timer:" + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
  }
//   Add button creation for each question
// dynamic display based on each question
function askQuestion() {
  setTime()
  mainPage.innerHTML = "";
  var askQuestion = document.createElement("h1");
  var firstAnswer = document.createElement("button");
  var secondAnswer = document.createElement("button");
  var thirdAnswer = document.createElement("button");
  var fourthAnswer = document.createElement("button");

  for (var i = 0; i < questions.length; i++) {
    askQuestion.textContext = gameConstruct.questions[i];
    firstAnswer.textContext = gameConstruct.answerRowOne[i];
    secondAnswer.textContext = gameConstruct.answerRowTwo[i];
    thirdAnswer.textContext = gameConstruct.answerRowThree[i];
    fourthAnswer.textContext = gameConstruct.answerRowFour[i];
  }





  var answer = confirm(questions[questionNumber].q);

  checkAnswer(answer);
}

// Need to add a timer element to ending the game as well - if statement?
// store highschore in global variable
function gameOver() {
  alert("You got " + gameScore + "/" + questions.length + "Game Over");
}


startButton.addEventListener("click", function () {
  playGame();
});
  

//   addEventListener to detect click of button to start game
