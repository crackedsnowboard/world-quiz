
//  Create global variables  here 
// store scores
var highScore = 0;
var questionNumber = 0;
// timer
// document.querySelector etc

// creat an object of questions
var questions = [
    { q: "The population of the United States is:", a1: "50 million", a2: "270 million", a3: "330 million", a4: "400 million" },
    { q: "The population of China is:", a1: "100 million", a2: "400 million", a3: "1.4  billion", a4: "1.9 billion" },
    { q: "Which country is expected to have the larget population by 2050?", a1: "Unites States", a2: "China", a3: "Nigeria", a4: "India" },
    { q: "Which river is the longest in the world?", a1: "Mississippi", a2: "Nile", a3: "Amazon", a4: "Ganges" },
    { q: "Chillis are native to which continent?", a1: "North America", a2: "Africa", a3:"Asia", a4:"Europe" }
  ];


  function playGame (){
    if(questionNumber > questions.length -1){
      gameOver()
    }else{
      askQuestion();
    }
    
  }
  
//   Add button creation for each question
// dynamic display based on each question
  function askQuestion(){
   
    var answer = confirm(questions[questionNumber].q);

    checkAnswer(answer);
}

// Need to add a timer element to ending the game as well - if statement?
// store highschore in global variable
function gameOver(){
    alert("You got " + gameScore + "/" + questions.length + "\nGame Over");
  }

//   addEventListener to detect click of button to start game
  function playGame()