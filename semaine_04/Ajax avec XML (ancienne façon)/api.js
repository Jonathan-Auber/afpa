let xhr = new XMLHttpRequest();
let container = document.querySelector(".container");

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.responseText);
        let datas = JSON.parse(xhr.responseText);

        for (let i = 0; i < 500; i++) {
            // console.log(data);
            container.innerHTML += `
            <div class="card">
            <img src="${datas[i].url} alt="">
            <div>
                <h3>${datas[i].title}</h3>
            </div>
        </div>
            `;

        }
    }
}

xhr.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
xhr.send();
