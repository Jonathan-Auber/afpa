let container = document.querySelector(".container");

fetch("https://dummyjson.com/users").then((response) => {
    return response.json();
})
    .then((data) => {
        console.log(data.users);
        data.users.forEach((element) => {
            container.innerHTML +=
            `<div class="id-card">
    <h2 class="name">${element.firstName} ${element.lastName}</h2>
    <div class="id-container">
        <figure class="profil-img"><img src="${element.image}" alt=""></figure>
        <div class="info">
            <p class="password">Password :<br>${element.password}</p>
            <p class="address">Address :<br>${element.address.address}</p>
        </div>
    </div>
</div>`})
    });