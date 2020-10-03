let data, questionNumber, questionString, answer;
console.log('Hello');


// async fetch function
async function getTrivia () {

    // await response of fetch call (amount = 10 to get ten questions, difficulty = easy, type = true or false)
    let response = await fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean");

    // only proceed once promise is resolved
    data = await response.json();

}

// set questions number to 1 (0 based array)

questionNumber = 0;

// create function to display question

function displayQuestion () {
    questionString = data.results[questionNumber].question;
    answer = data.results[questionNumber].correctAnswer;
}

function clickTrue() {

}




function showButton() {
    let divButtonNewGame = document.getElementById("new-game-button");
    divButtonNewGame.style.display = "none";
    let buttonsTrueFalse = document.getElementById("true-false-buttons");
    buttonsTrueFalse.style.display = "block";
};

function newGame() {
    showButton()
};

let newGameButton = document.querySelector("#new-game");


newGameButton.addEventListener('click', newGame);
 
