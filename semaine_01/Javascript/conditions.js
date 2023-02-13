// Exercice conditions

let hour = 23; // Variable

if (hour >= 6 && hour < 12) {
    console.log("C'est le matin !");
}else if (hour >= 12 && hour < 18) {
    console.log("C'est l'heure de la sieste !");
}else if ((hour >= 18 && hour <= 24) || (hour >= 0 && hour < 6)) {
    console.log("APERO !!!");
}else {
    console.log("Vous avez trop bu!");
}