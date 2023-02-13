
/*
Exercice 2:
Créez une fonction qui trouve l’index d’un élément donné. Si l’élément n’existe pas, retournez -1.

Exemple:
find([2, 7, 1], 7) ➞ 1

find([6, 9, 5], 6) ➞ 0

find([6, 7, 8], 9) ➞ -1

*/
function find(tab, val) {
  if (tab.indexOf(val) >= 0) {
    return tab.indexOf(val)
  }
  return -1;
}

console.log(find([2, 5, 12], 5));
console.log(find([2, 5, 12], 6));

// OU 

function find(tab, val) {
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] === val) {
      return i;
    }
  }
  return -1;
}

console.log(find([2, 5, 12], 5));
console.log(find([2, 5, 12], 12));
console.log(find([2, 5, 12], 34));

/*
 Exercice 3:
Écrivez une fonction pour vérifier si un tableau contient un nombre particulier.

Exemple:
nbrExist([6, 7, 8], 7) ➞ true

nbrExist([1, 2, 3], 5) ➞ false

nbrExist([], 0) ➞ false
*/

function nbrExist(tab, val) {
  for (value of tab) {
    if (val === value) {
      return true;
    }
  }
  return false;
}

// OU 

function nbrExist(tab, val) {
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] === val) {
      return true;
    }
  }
  return false;
}

console.log(nbrExist([6, 7, 8], 7));
console.log(nbrExist([1, 2, 3], 5));
console.log(nbrExist([], 0));

/*
 Exercice 4:
Créez une fonction qui prend une chaîne (un nom aléatoire). Si le dernier caractère du nom est un « s »,
retournez TRUE, sinon retournez FALSE.

Exemple:

checkS("Thomas") ➞ true

checkS("Ali") ➞ false

checkS("Alex") ➞ false

checkS("Elvis") ➞ true
 */

function checkS(str) {
  return str[str.length - 1] === "s";
}

console.log(checkS("Thomas"));
console.log(checkS("Ali"));
console.log(checkS("Alex"));
console.log(checkS("Elvis"));

/*
 Exercice 5:
Créez une fonction qui renvoie TRUE si une chaîne contient un ou des espaces. Sinon renvoie FALSE.

Exemple:

containSpaces("Thomas") ➞ false

containSpaces("Hello World!") ➞ true

containSpaces(" ") ➞ true

containSpaces("") ➞ false
*/

function containSpaces(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ")
      return true;
  }

  return false;
}

console.log(containSpaces("Thomas"));

console.log(containSpaces("Hello World!"));

console.log(containSpaces(" "));

console.log(containSpaces(""));




/*
 Exercice 7

Créez une fonction qui prend une chaîne et renvoie TRUE ou FALSE, selon que les caractères sont en ordre
 ou non.

Exemple:

checkOrder("abc") ➞ true

checkOrder("zyx") ➞ false

checkOrder("aabbcc") ➞ true

checkOrder("aBcD") ➞ true

 */

function checkOrder(str) {
  return str.toLowerCase() === str.toLowerCase().split('').sort().join('');
}

console.log(checkOrder("abc"));

console.log(checkOrder("zyx"));

console.log(checkOrder("aabbcc"));

console.log(checkOrder("aBcD"));


/*
 * Exercice 8
 * 
 Créez une fonction qui ajoute une sous-chaîne à la fin de chaque chaîne du tableau.

Exemple:

addEnd(["accept", "achet", "adapt"], "able") ➞ ["acceptable", "achetable", "adaptable"]

addEnd(["aim", "act", "ard"], "ant") ➞ ["aimant", "actant", "ardant"]
*/

function addEnd(tableau, fin) {
  let t = tableau.map(element => element + fin);
  return t;
}


console.log(addEnd(["accept", "achet", "adapt"], "able"));
console.log(addEnd(["aim", "act", "ard"], "ant"));

/*
 Exercice 9
* Créez une fonction qui vérifie si l’argument est un entier ou une chaîne. Renvoie « int » s’il s’agit d’un entier et « string » s’il s’agit d’une chaîne.

Exemple:

checkIntOrStr("WayToLearnX") ➞ "string"

checkIntOrStr(1) ➞ "int"

checkIntOrStr("250") ➞ "string"
 *
 */

function checkIntOrStr(x) {
  if (typeof x === "number") {
    if (Number.isInteger(x) === true) {
      return "int"
    }
  }
  return typeof x;
}

console.log(checkIntOrStr("WayToLearnX"));
console.log(checkIntOrStr(1));
console.log(checkIntOrStr("250"));

/*
 
Exercice 10
Créez une fonction qui prend une phrase et renvoie le nombre de mots.

Exemple:

count("Welcome to WWM") ➞ 3

count("Hello World") ➞ 2

count("I am going to my school") ➞ 6
*/
function count(str) {
  return str.split(' ').length;
}

console.log(count("Welcome to WWM"));
console.log(count("Hello World"));
console.log(count("I am going to my school"));

/*
 Exercice 11

Créez une fonction récursive qui renvoie le total de tous les nombres impairs jusqu’à n(inclus). 
n sera donné comme un nombre impair.
 Récursive = qui s'appelle elle même.
Exemple:

sommeImpair(3) ➞ 4
// 1 + 3 = 4

sommeImpair(7) ➞ 16

sommeImpair(59) ➞ 900
*/

function sommeImpair(n) {
  let somme = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 1) {
      somme.push(i);
    }
  }
  return somme.reduce((a, b) => a + b);
}

console.log(sommeImpair(4));
console.log(sommeImpair(7));
console.log(sommeImpair(59));


/*
 Exercice 12

Créez une fonction qui renvoie TRUE si la chaîne passée en paramètre ne contient
  que des lettres majuscules ou minuscules.

  Exemple:

isSameCase("GérardTourres") ➞ false

isSameCase("gerard") ➞ true

isSameCase("TOURRES") ➞ true
*/

function isSameCase(str) {
return (str === (str.toLowerCase() || str.toUpperCase()))
}

console.log(isSameCase("GérardTourres"));
console.log(isSameCase("gerard"));
console.log(isSameCase("TOURRES"));

/*
 Exercice 13

Une année bissextile a un jour ajouté à février pour être synchronisée avec l’année saisonnière. Une année bissextile apparaît avec une fréquence régulière, déterminée par la règle ci-dessous:

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
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

/*
Exercice 14

Écrivez une fonction pour inverser un tableau. Attention: N’utilisez pas la méthode intégrée reverse();

Exemple:
reverseTab([1, 2, 3]) ➞ [3, 2, 1]

reverseTab([1, 1, 2, 2, 3]) ➞ [3, 2, 2, 1, 1]
*/
function reverseTab(tab) {
  // Écrivez votre code ici
}

// Afficher la sortie
console.log(reverseTab([1, 2, 3]));
console.log(reverseTab([1, 1, 2, 2, 3]));


/*
Créez une fonction qui prend un tableau et renvoie le dernier élément du tableau.

Exemple:
getLastElem([1, 2, 3, 4]) ➞ 4

getLastElem([‘Alex’, ‘Bob’, ‘Emily’]) ➞ ‘Emily’


*/

function getLastElem(tab) {
  // Écrivez votre code ici
}

// Afficher la sortie
console.log(getLastElem([1, 2, 3, 4]));
console.log(getLastElem(["Alex", "Bob", "Emily"]));