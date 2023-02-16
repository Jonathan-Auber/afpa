let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;

let resultPara = document.querySelector(".resultPara");


console.log(randomNumber);


// on écoute l'événement click sur le bouton submit
guessSubmit.addEventListener('click', checkGuess);

function checkGuess() {

    if (guessCount <= 10) {
        // Le strictement égal pose problème car la valeur de l'input est un string alors que la valeur de randNumber est un nombre
        if (guessField.value == randomNumber) {
            lastResult.innerHTML = "Bravo";
            lastResult.style.backgroundColor = "green";
            let newButton = document.createElement("button");
            newButton.classList.add("btn");
            let reset = document.createTextNode("Reset");
            lowOrHi.innerHTML = "";
            lowOrHi.appendChild(newButton);
            newButton.appendChild(reset);
            guessSubmit.disabled = true;
            resetGame();
        } else if (guessField !== randomNumber) {
            guesses.innerHTML += guessField.value + " ";
            lastResult.innerHTML = "Essaie encore";
            lastResult.style.backgroundColor = "orange";
            guessCount++;
            if (guessField.value < randomNumber) {
                lowOrHi.innerHTML = "Vous êtes trop bas";
            } else if (guessField.value > randomNumber) {
                lowOrHi.innerHTML = "Vous êtes trop haut";
            }
        }
    } else {

        lastResult.innerHTML = "Game over";
        lastResult.style.backgroundColor = "red";
        let newButton = document.createElement("button");
        newButton.classList.add("btn");
        let reset = document.createTextNode("Reset");
        lowOrHi.innerHTML = "";
        lowOrHi.appendChild(newButton);
        newButton.appendChild(reset);
        guessSubmit.disabled = true;
        resetGame();
    }
    guessField.value = "";
}

function resetGame() {
    let resetButton = document.querySelector(".btn");
    resetButton.addEventListener('click', newGame);
    function newGame() {
        guessField.value = "";
        guesses.innerHTML = "";
        lastResult.innerHTML = "";
        lowOrHi.innerHTML = "";
        guessCount = 1;
        guessSubmit.disabled = false;
        randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log(randomNumber);
    }
}





