let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {

  const userGuess = Number(guessField.value); // Le nombre entré par l'utilisateur

  // Au démarrage, après le premier nombre rentré, on affiche le titre du champ nombre de coups
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }

  // on ajoute à la liste de nombres entrés le dernier (affichage, tableau inutile)
  guesses.textContent += userGuess + ' ';

  // on teste le nombre proposé par l'utilisateur

  // si c'est le bon 
  if (userGuess === randomNumber) {
    //  on affiche un message de félicitations
    lastResult.textContent = 'Congratulations! You got it right!';

    // sur fond vert
    lastResult.style.backgroundColor = 'green';

    // on vide l'indication trop haut-trop bas
    lowOrHi.textContent = '';

    // on met fin au jeu
    setGameOver();

    // si nombre maxi atteint
  } else if (guessCount === 10) { // nombre maximum essais atteint !!

    // on affiche fin de partie
    lastResult.textContent = '!!!GAME OVER!!!';

    // on vide les indications trop haut - trop bas
    lowOrHi.textContent = '';

    // onmet fin au jeu
    setGameOver();

    // si on n'a pas gagné et si le nombre de chances n'est pas atteint
  } else {
    // on informe l'utilisateur que ça n'est pas le bon chiffre
    lastResult.textContent = 'Wrong!'; // pas bon !!
    lastResult.style.backgroundColor = 'red';

    // on détermine l'indication trop bas - trop haut
    if (userGuess < randomNumber) { // trop petit !
      lowOrHi.textContent = 'Last guess was too low!';
    } else if (userGuess > randomNumber) { // trop grand
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }
  // on incrémente le nombre d'essais
  guessCount++;

  // on efface le champ d'entrée
  guessField.value = '';

  // on rend le focus au champ d'entrée
  guessField.focus();
}

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