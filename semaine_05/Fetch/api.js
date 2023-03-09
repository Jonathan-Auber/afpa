const TITLE = document.querySelector("#title");
const CITY = document.querySelector("#city");
const MAIN = document.querySelector("#main");

function generateHTML(element) {
  const section = document.createElement("section");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const ul = document.createElement("ul");
  MAIN.appendChild(section);
  section.classList.add("card");
  section.appendChild(h2);
  section.lastChild.innerHTML = `${element.name}`;
  section.appendChild(p);
  section.lastChild.innerHTML = `Secret identity: ${element.identity}`;
  section.appendChild(p);
  section.lastChild.innerHTML = `Age: ${element.age}`;
  section.appendChild(ul);
  section.lastChild.innerHTML = `Superpowers:`;
  element.powers.forEach(power => {
    const li = document.createElement("li");
    ul.appendChild(li);
    ul.lastChild.innerHTML += `${power}`;
  })
}

fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    TITLE.innerHTML = `${data.squadName}`;
    CITY.innerHTML = `Hometown: ${data.homeTown} // Formed: ${data.formed}`;
    data.members.forEach((element) => generateHTML(element))
  });




