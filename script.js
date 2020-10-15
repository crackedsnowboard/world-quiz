
var highScore = 0;
var questionNumber = 0;
var secondsLeft = 10;
var timeElement = document.querySelector("#timer");
var startButton = document.querySelector("#commence");
var mainPage = document.querySelector("#main");
var choicesSection = document.querySelector("#choices");
var questionsDiv = document.querySelector("#questions")
var endPresentation = document.querySelector("#theEnd")

console.log(timeElement);
console.log(startButton);
console.log(main);
console.log(questionsDiv);
console.log(choicesSection);
console.log(endPresentation);

userAnswerChoices = [];

var gameQuestions = [
  {
    question: "The population of the United States is:",
    answers: ["50 million", "270 million", "330 million", "400 million"],
    jackpot: "330 million",
  },

  {
    question: "The population of China is:",
    answers: ["100 million", "400 million", "1.4 billion", "1.9 billion"],
    jackpot: "1.4 billion",
  },

  {
    question: "Which country is expected to have the larget population by 2050?",
    answers: ["Unites States", "China", "Nigeria", "India"],
    jackpot: "India",
  },

  {
    question: "Which river is the longest in the world?",
    answers: ["Mississippi", "Nile", "Amazon", "Ganges"],
    jackpot: "Nile",
  },

  {
    question: "Chillis are native to which continent?",
    answers: ["Americas", "Africa", "Asia", "Europe"],
    jackpot: "Americas",
  },
  {
    queston: "How many humans currently live on earth?",
    answers: ["200 million", "20 billion", "6 trillion", "7 billion"],
    jackpot: "7 billion",
  },
]

function playGame() {

  if (questionNumber >= (gameQuestions.length)) {
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

// dynamic display based on each question
function askQuestion() {
  setTime();
  mainPage.setAttribute("style", "display: none");
  choicesSection.innerHTML = "";

  var currentQuestion = gameQuestions[questionNumber].question;
  questionsDiv.textContent = currentQuestion

  for (var i = 0; i < (gameQuestions.length - 2); i++) {
    var buttonCreation = document.createElement("button");
    console.log(buttonCreation)
    buttonCreation.innerHTML = gameQuestions[questionNumber].answers[i]
    choicesSection.appendChild(buttonCreation);

  }
  checkAnswer();
  questionNumber++
}


function checkAnswer(answerChoice) {
  choicesSection.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("I was clicked")
    console.log(event.target.innerHTML)
    
    
    console.log(gameQuestions[questionNumber].jackpot)

    if (event.target.innerHTML === gameQuestions[questionNumber-1].jackpot) {
      
      var resultCorrect = document.createElement("h5");
      resultCorrect.textContent = gameQuestions[questionNumber-1].jackpot;
      choicesSection.appendChild(resultCorrect);
      highScore++
      askQuestion();
    }

    else {
      secondsLeft++;
      askQuestion();
    }

  });
}


function gameOver() {
  questionsDiv.setAttribute("style", "display: none");
  choicesSection.setAttribute("style", "display: none");

  var h1El = document.createElement("h1");
  var h3El = document.createElement("h3");
  var inputEl = document.createElement("input");
  var buttonEl = document.createElement("button");

  h1El.textContent = "All Done!";
  h3El.textContent = "Your final score: " + highScore + "/" + gameQuestions.length;
  inputEl.textContent = "Enter your intials here: ";
  buttonEl.textContent = "Submit";

  endPresentation.appendChild(h1El);
  endPresentation.appendChild(h3El);
  endPresentation.appendChild(inputEl);
  endPresentation.appendChild(buttonEl);
}


startButton.addEventListener("click", function () {
  playGame();
});
