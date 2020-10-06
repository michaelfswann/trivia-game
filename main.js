//create some global variables that store array of questions, question number, the current current question as string, the answer as boolean, the score and the number of questions answered
let data, questionNumber, questionString, answer, gameScore, questionsAnswered;

// query selector shortcut variables
const divButtonNewQuestion = document.getElementById("new-question-div");
const buttonsTrueFalse = document.getElementById("true-false-buttons");
const questionResults = document.getElementById("result");
const questionBeingDisplayed = document.querySelector("#question");
const scorePanel = document.getElementById('scores');
const buttonNewGame = document.getElementById('new-game');

// async fetch function
async function getTrivia () {

    // await response of fetch call (amount = 10 to get ten questions, difficulty = easy, type = true or false)
    let response = await fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean");

    // only proceed once promise is resolved
    data = await response.json();

}

// call function immediately so data should be defined when we need it
getTrivia()

// set questions number to 1 (0 based array)
questionNumber = 0;

// create function to display question
function displayQuestion () {
    // hide new question button
    divButtonNewQuestion.style.display = "none";
    //display question
    questionBeingDisplayed.innerText = questionString;
    //point to relevant answer
    answer = data.results[questionNumber].correct_answer;
    console.log(answer)
};

// create function to handle user selects true
function clickTrue() {
    // hide true/false buttons
    buttonsTrueFalse.style.display = "none";
    // display result div
    questionResults.style.display = "block";
    // judge answer
    if (answer === 'True') {
        //amend div text to state correct then increment gameScore
        questionResults.innerText = 'Correct!'
        gameScore++
    } else {
        //amend div text to state incorrect
        questionResults.innerText = 'Wrong Answer!'
    }
    // increment question number and number of questions answered for score
    questionNumber++
    questionsAnswered++
    // update scores 
    scorePanel.innerText = `Current Score: ${gameScore} Questions Answered: ${questionsAnswered}`;
    // show new question button
    divButtonNewQuestion.style.display = "block";
};

// create function to handle user selects false
function clickFalse() {
    // hide true/false buttons
    buttonsTrueFalse.style.display = "none";
    // display result div
    questionResults.style.display = "block";
    // judge answer
    if (answer === 'False') {
        //amend div text to state correct then increment gameScore
        questionResults.innerText = 'Correct!'
        gameScore++
    } else {
        //amend div text to state incorrect
        questionResults.innerText = 'Wrong Answer!'
    }
    // show next question div
    divButtonNewQuestion.style.display = "block";
    // increment question number and number of questions answered for score
    questionNumber++
    questionsAnswered++    
    // update scores 
    scorePanel.innerText = `Current Score: ${gameScore} Questions Answered: ${questionsAnswered}`
}

// create function to show/hide answer buttons
function showAnswerButton() { 
    buttonsTrueFalse.style.display = "block";
};

// create function to generate new question
function newQuestion() {
    // check to make sure game not finished
    if (questionsAnswered === 3) {
        console.log('ending')
        endGame();
     } else {
    // point questString variable to the to the relevent part of trivia array (data)
    questionString = data.results[questionNumber].question;
    console.log(questionString);
    // hide question result (correct or wrong! text)
    questionResults.style.display = "none";
    // display new question and shower answer buttons
    displayQuestion();
    showAnswerButton()
     };
};

function startGame() {
    // initialise scores and question number
    gameScore = 0;
    questionsAnswered = 0;
    // get a new question
    newQuestion();
    // show answer panel 
    let buttonPanelDiv = document.getElementById('button-panel')
    buttonPanelDiv.style.display = "block";
};

// new question event listener
const newQuestionButton = document.querySelector("#new-question");
newQuestionButton.addEventListener('click', newQuestion);

// start game event listener
const startGameButton = document.getElementById('start-button');
startGameButton.addEventListener('click', startGame);
 
// answer true event listener
const trueButton = document.getElementById('true-button');
trueButton.addEventListener('click', clickTrue);

// answer false event listener
const falseButton = document.getElementById('false-button');
falseButton.addEventListener('click', clickFalse);

// create function to end the game
function endGame() {
    // hide game app div
    let divAppContainer = document.getElementById('app-container');
    divAppContainer.style.display = 'none';
    // show final score div and update scores
    let finalScoreDiv = document.getElementById('final-score');
    finalScoreDiv.innerText = `Final Score: ${gameScore} Questions Answered: ${questionNumber}`
    finalScoreDiv.style.display = 'block';
    
};
