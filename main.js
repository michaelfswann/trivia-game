let data, questionNumber, questionString, answer, gameScore;
console.log('Hello');

const divButtonNewGame = document.getElementById("new-game-button");
const buttonsTrueFalse = document.getElementById("true-false-buttons");
const questionResults = document.getElementById("result");
const questionBeingDisplayed = document.querySelector("#question");
const scorePanel = document.getElementById('scores');
const buttonNewGame = document.getElementById('new-game');

gameScore = 0;
questionNumber = 0;



// async fetch function
async function getTrivia () {

    // await response of fetch call (amount = 10 to get ten questions, difficulty = easy, type = true or false)
    let response = await fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean");

    // only proceed once promise is resolved
    data = await response.json();

}

getTrivia()


// set questions number to 1 (0 based array)

questionNumber = 0;

// create function to display question

function displayQuestion () {
    questionString = data.results[questionNumber].question;
    console.log(questionString);
    questionBeingDisplayed.innerText = questionString;
    answer = data.results[questionNumber].correct_answer;
    console.log(answer)
}

function clickTrue() {
    if (questionNumber === 10) {
        let divAppContainer = document.getElementById('app-container');
        divAppContainer.style.display = 'none'
        alert(`Final Score: ${gameScore} Questions Answered: ${questionNumber}`);
     } else {
    buttonsTrueFalse.style.display = "none";
    questionResults.style.display = "block";
    if (answer === 'True') {
        questionResults.innerText = 'Correct!'
        gameScore++
    } else {
        questionResults.innerText = 'Wrong Answer!'
    }
    buttonNewGame.innerText = 'Next Question'
    divButtonNewGame.style.display = "block";
    questionNumber++
    scorePanel.innerText = `Current Score: ${gameScore} Questions Answered: ${questionNumber}`
    }

}

function clickFalse() {
    if (questionNumber === 10) {
        let divAppContainer = document.getElementById('app-container');
        divAppContainer.style.display = 'none'
        alert(`Final Score: ${gameScore} Questions Answered: ${questionNumber}`);
    } else {
    buttonsTrueFalse.style.display = "none";
    questionResults.style.display = "block";
    if (answer === 'False') {
        questionResults.innerText = 'Correct!'
        gameScore++
    } else {
        questionResults.innerText = 'Wrong Answer!'
    }
    buttonNewGame.innerText = 'Next Question'
    divButtonNewGame.style.display = "block";
    questionNumber++
    scorePanel.innerText = `Current Score: ${gameScore} Questions Answered: ${questionNumber}`
}   
}



function showButton() {
    
    divButtonNewGame.style.display = "none";
    
    buttonsTrueFalse.style.display = "block";
};

function newGame() {
    questionResults.style.display = "none";
    displayQuestion();
    console.log('being called')
    showButton()
};

const newGameButton = document.querySelector("#new-game");


newGameButton.addEventListener('click', newGame);
 

const trueButton = document.getElementById('true-button');

trueButton.addEventListener('click', clickTrue);


const falseButton = document.getElementById('false-button');

falseButton.addEventListener('click', clickFalse);

