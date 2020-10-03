let data;
console.log('Hello');


// async fetch function
async function getTrivia () {

    // await response of fetch call (amount = 10 to get ten questions, difficulty = easy, type = true or false)
    let response = await fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean");

    // only proceed once promise is resolved
    data = await response.json();

}