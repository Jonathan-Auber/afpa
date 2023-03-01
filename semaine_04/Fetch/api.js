let xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
xhr.send();
console.log(xhr);