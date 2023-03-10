// we begin populating a constant 'superHeroes' with fetch results of api, and using two distinct functions
//  'populateHeader' and 'populateHeroes'. The first one for the header, the second for detailed heroes.

async function populate() {

  const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();

  populateHeader(superHeroes);
  populateHeroes(superHeroes);

}

// The function to create title
function populateHeader(obj) {
  const header = document.querySelector('header');

  // the H1
  const myH1 = document.createElement('h1');
  myH1.textContent = obj.squadName;
  // to integrate it in the header
  header.appendChild(myH1);
  // same process with a 'p'
  const myPara = document.createElement('p');
  myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
  header.appendChild(myPara);
}

// The function to create 'heroes'
function populateHeroes(obj) {
  // we select the section defined in the html file
  const section = document.querySelector('section');
  const heroes = obj.members;

  // we loop on heroes and create for each one : 1 article, 1 H2, some 'p' and a list of powers
  for (const hero of heroes) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('ul');

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = 'Superpowers:';

    // a small loop to get powers
    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement('li');
      listItem.textContent = power;
      myList.appendChild(listItem);
    }

    // we affect to the 'article'
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);
    // we affect 'article' to section 
    section.appendChild(myArticle);
  }
}

// trigger to work.....
populate();
