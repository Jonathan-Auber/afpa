

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

let load = document.querySelector(".barre");
let button = document.querySelector(".btn");