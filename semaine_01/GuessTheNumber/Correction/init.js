let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;



  // on écoute l'événement click sur le bouton submit
  guessSubmit.addEventListener('click', checkGuess);

  
  // Fin du jeu
  function setGameOver() {

    // on supprime le champ d'entrée
    guessField.disabled = true;
    // on supprime l'envoi du nombre
    guessSubmit.disabled = true;

    // on crée un élément bouton
    resetButton = document.createElement('button');

    // on lui ajoute un texte
    resetButton.textContent = 'Start new game';

    // on rajoute le bouton au body du html (affichage du bouton)
    document.body.appendChild(resetButton);

    // on attend l'action utilisateur sur le bouton
    resetButton.addEventListener('click', resetGame);
  }
