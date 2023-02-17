let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;


  function resetGame() {

    // on met le compteur d'essais à 1
    guessCount = 1;

    // on sélectionne tous les p 
    const resetParas = document.querySelectorAll('.resultParas p');

    // on parcourt et on vide tous les p
    for (const resetPara of resetParas) {
      resetPara.textContent = '';
    }

    // on supprime le bouton reset
    resetButton.parentNode.removeChild(resetButton);

    // on active le champ de saisie et le bouton submit
    guessField.disabled = false;
    guessSubmit.disabled = false;

    // On vide le champ de saisie et on lui donne le focus
    guessField.value = '';
    guessField.focus();

    // on met le fond blanc sur l'affichage du résultat
    lastResult.style.backgroundColor = 'white';

    // on tire un nouveau nombre aléatoire
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }