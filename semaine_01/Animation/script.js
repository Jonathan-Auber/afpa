// Exercice 1 Barre de chargement
let load = document.querySelector(".barre");
let button = document.querySelector(".btn");

function loading() {
    if (load.classList == "barre") {
        load.classList.add("load");
        button.innerHTML = "Cliquez pour décharger";
        button.classList.add("red");
        button.classList.remove("green");
    } else if (load.classList = "barre load") {
        load.classList.remove("load");
        button.innerHTML = "Cliquez pour charger";
        button.classList.add("green");
        button.classList.remove("red");
    }
}



// Exercice 2 Pop-up

/* function popup () {
    if (popUp.classList == "ninja d-none") {
        popUp.classList.remove("d-none");
    } 
    else if (popUp.classList !== "ninja d-none"){
        popUp.classList.add("d-none");
    }
} */

// Utilisation de toggle

let img = document.querySelector(".img");
let popUp = document.querySelector(".ninja");

function popup () {
    popUp.classList.toggle("d-none");
}

img.addEventListener("click", popup);