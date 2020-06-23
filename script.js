
var highScore = 0;
var questionNumber = 0;
var secondsLeft = 10;
var timeElement = document.querySelector("#timer");
var startButton = document.querySelector("#commence");
var mainPage = document.querySelector("#main");
var choicesSection = document.querySelector("#choices");
var questionsDiv = document.querySelector("#questions")
var endPresentation = document.querySelector("#theEnd")
// var askQuestion = document.createElement("h1");
// var firstAnswer = document.createElement("button");
// var secondAnswer = document.createElement("button");
// var thirdAnswer = document.createElement("button");
// var fourthAnswer = document.createElement("button");
console.log(timeElement);
console.log(startButton);
console.log(main);
console.log(questionsDiv);
console.log(choicesSection);
console.log(endPresentation);



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
]

console.log(gameQuestions.length);

// questions: ["The population of the United States is:", "The population of China is:", "Which country is expected to have the larget population by 2050?", "Which river is the longest in the world?", "Chillis are native to which continent?"],
//   answerRowOne: ["50 million", "100 million", "Unites States", "Mississippi", "North America"],
//     answerRowTwo: ["270 million", "400 million", "China", "Nile", "Africa"],
//       answerRowThree: ["330 million", "1.4  billion", "Nigeria", "Amazon", "Asia"],
//         answerRowFour: ["400 million", "1.9 billion", "India", "Ganges", "Europe"], 
// }


// ["The population of the United States is:", "The population of China is:",  "Which country is expected to have the larget population by 2050?", "Which river is the longest in the world?", "Chillis are native to which continent?",];




//   { q: "The population of China is:", a1: "100 million", a2: "400 million", a3: "1.4  billion", a4: "1.9 billion" },
//   { q: "Which country is expected to have the larget population by 2050?", a1: "Unites States", a2: "China", a3: "Nigeria", a4: "India" },
//   { q: "Which river is the longest in the world?", a1: "Mississippi", a2: "Nile", a3: "Amazon", a4: "Ganges" },
//   { q: "Chillis are native to which continent?", a1: "North America", a2: "Africa", a3: "Asia", a4: "Europe" }
// ];


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
  setTime()
  mainPage.setAttribute("style", "display: none");
  choicesSection.innerHTML = "";

  var currentQuestion = gameQuestions[questionNumber].question;
  questionsDiv.textContent = currentQuestion

  var choiceButton = document.createElement("button");
  console.log(choiceButton)
  choicesSection.setAttribute("class", "showcase")
  choicesSection.appendChild(choiceButton);
  choicesSection.textContent = gameQuestions[questionNumber].answers
  checkAnswer();
}







  // mainPage.appendChild(questions);
  // mainPage.appendChild(firstAnswer);
  // mainPage.appendChild(secondAnswer);
  // mainPage.appendChild(thirdAnswer);
  // mainPage.appendChild(fourthAnswer);

  // firstAnswer.setAttribute("style", "margin:auto; width:25%; height:200; text-align:center;");

  // for (var i = 0; i < gameQuestions.length; i++) {
  //   askQuestion.textContext = "test one two three"
  //   firstAnswer.textContext = gameQuestions.answerRowOne[i];
  //   secondAnswer.textContext = gameQuestions.answerRowTwo[i];
  //   thirdAnswer.textContext = gameQuestions.answerRowThree[i];
  //   fourthAnswer.textContext = gameQuestions.answerRowFour[i];
  // }
  // stringof[gameConstruct.questions[i]];





  // var answer = confirm(gameConstruct[questionNumber].q);

  // checkAnswer(answer);
// }

function checkAnswer() {
  choicesSection.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("I was clicked")
    if(event.target.matches === gameQuestions[questionNumber].jackpot) {
      highScore++
      console.log(event.target.matches);
    }
     else {
      secondsLeft++;
      questionNumber++;
      askQuestion();
     }
      // var item = document.createElement("div");
      // item.textContent = groceries[event.target.parentElement.id];
      // shoppingCartEl.append(item);
    
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
