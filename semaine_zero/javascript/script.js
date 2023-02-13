var numMonthYear = 0;

if (numMonthYear > 6 && numMonthYear <= 12) {
    console.log("Deuxième semestre");
} else if (numMonthYear >= 1 && numMonthYear <= 3) {
    console.log("Premier trimestre");
} else if (numMonthYear === 0 || numMonthYear > 12) {
    console.log("erreur");
}

// Utilisation de prompt('') pour afficher une fenêtre à l'ouverture de la page

var age = prompt('Rentrez votre âge');
console.log(age);

// Suivi d'un exo perso

var numMonth = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
  ];
  var month = prompt("Quel mois sommes-nous?");
  alert(month);
  
  function whatNumber(month) {
    if (month === "Janvier") {
      return 0;
    } else if (month === "Février") {
      return 1;
    } else if (month === "Mars") {
      return 2;
    } else if (month === "Avril") {
      return 3;
    } else if (month === "Mai") {
      return 4;
    } else if (month === "Juin") {
      return 5;
    } else if (month === "Juillet") {
      return 6;
    } else if (month === "Aout") {
      return 7;
    } else if (month === "Septembre") {
      return 8;
    } else if (month === "Octobre") {
      return 9;
    } else if (month === "Novembre") {
      return 10;
    } else if (month === "Décembre") {
      return 11;
    }
  }
  
  monthNumber = whatNumber(month);
  
  if (
    monthNumber > numMonth.indexOf("Juin") &&
    monthNumber <= numMonth.indexOf("Décembre")
  ) {
    console.log("Deuxième semestre");
    alert("Deuxième semestre");
  } else if (
    monthNumber >= numMonth.indexOf("Janvier") &&
    monthNumber <= numMonth.indexOf("Mars")
  ) {
    console.log("Premier trimestre");
    alert("Premier trimestre");
  } 
  // Cette partie est a finaliser.
  else if (numMonth != monthNumber) {
    console.log("Erreur");
    alert("Erreur");
  }



  // Les boucles :

  
  for (var i = 0; i <= 20; i++) {
    if ((i % 2) == 0) {
      console.log(i);
    }
  } // La console affiche les nombres pairs seulement grâce au modulo (%)!
  
  i = 0;
while (i <= 9) {
  i++;
  console.log(i);
} // La console affiche i de 1 à 10!


// Les fonctions :

var minute = prompt("Combien de minutes?");

function minuteToSecond(minute) {
  return minute * 60;
}

var result = minuteToSecond(minute);
alert(result); // Convertisseur de minutes en seconde!
