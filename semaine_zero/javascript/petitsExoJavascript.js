/*Écrivez un programme JavaScript pour trouver le plus grand des trois entiers donnés.

Exemple:
getMax(5, 9, 1) ➞ 9

getMax(2, 3, 10) ➞ 10
  */

function getMax(a, b, c) {
  // Écrivez votre code ici
  if (a > b) {
    if (a > c) {
      return a;
    }
  } else if (b > a) {
    if (b > c) {
      return b;
    }
  }
  return c;
}

// Ou
function getMax(a, b, c) {
  // Écrivez votre code ici
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  } else if (a === b) {
    return a + " and " + b;
  }
  else if (b === c) {
    return b + " and " + c;
  }
}

// Ou (Merci ChatGPT)
function getMax(a, b, c) {
  // Écrivez votre code ici
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}

// Afficher la sortie
console.log(getMax(5, 9, 51));
console.log(getMax(12, 3, 10));


/*
Avec deux nombres, retournez TRUE si la somme des deux nombres est inférieure à 100. 
Sinon, retournez FALSE.

Exemple:
check(5, 20) ➞ true
// 5 + 20 = 25

check(60, 55) ➞ false
// 60 + 55 = 115
*/

function check(a, b) {
  // Écrivez votre code ici
  if ((a + b) < 100) {
    return true
  }
  return false
}

// Afficher la sortie
console.log(check(5, 20));
console.log(check(60, 55));


/*
Écrivez une fonction qui prend deux entiers (heures, minutes) et les convertit en secondes.

Exemple:
hmTos(1, 10) ➞ 4200

hmTos(0, 59) ➞ 3540

hmTos(0, 0) ➞ 0
*/

function hmTos(heure, minute) {
  // Écrivez votre code ici
  let totalHour = heure * 3600;
  let totalMinute = minute * 60;
  let totalToSecond = totalHour + totalMinute
  return totalToSecond;
}

//Ou

function hmTos(heure, minute) {
  // Écrivez votre code ici
  return ((heure * 3600) + (minute * 60));
}

// Afficher la sortie
console.log(hmTos(1, 10));
console.log(hmTos(0, 59));
console.log(hmTos(0, 0));

/*
une année bissextile a un jour ajouté à février pour être synchronisée avec l’année saisonnière. Une année bissextile apparaît avec une fréquence régulière, déterminée par la règle ci-dessous:

Une année doit être divisible par 400 ou divisible par 4 et non pas 100.

Vous devez implémenter une fonction qui renvoie TRUE si c’est une année bissextile, ou FALSE si ce n’est pas le cas.

Exemple:

bissextile(2020) ➞ true
// Divisé par 4 et non par 100.

bissextile(1210) ➞ false


bissextile(2000) ➞ true
// Divisé par 400.

 */

function bissextile(year) {
  //ecrivez votre code ici
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  }
  return false;
}

// Ou
function bissextile(year) {
  //ecrivez votre code ici
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}