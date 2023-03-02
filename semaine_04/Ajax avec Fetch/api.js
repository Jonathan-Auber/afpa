let container = document.querySelector(".cards-list");

fetch("https://dummyjson.com/products").then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data.products);
    data.products.forEach((element) => {
        container.innerHTML += `<div class="card">
    <div class="card_image"> <img src="${element.images[0]}"> </div>
    <div class="card_title title-white">
      <p>${element.title}</p>
    </div>
  </div>`});
})
    ;

