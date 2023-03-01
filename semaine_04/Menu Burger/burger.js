let menu = document.querySelector('.menu');
let spanTop = document.querySelector('#spanTop');
let spanMiddle = document.querySelector('#spanMiddle');
let spanBottom = document.querySelector('#spanBottom');
let links = document.querySelector(".links");
let linkInNav = document.querySelectorAll("a");

menu.addEventListener("click", menuBurger);

function menuBurger() {
    spanTop.classList.toggle("span_1");
    spanMiddle.classList.toggle("span_2");
    spanBottom.classList.toggle("span_3");
    links.classList.toggle("burger");
}

// function menuBurger() {
//     console.log(menu.classList);
//     if (menu.classList[1] !== "open") {
//         menu.classList.add("open");
//         spanMiddle.style.display = "none";
//         spanBottom.style.marginTop = "-5px";
//         spanBottom.style.transform = "rotate(45deg)";
//         spanTop.style.transform = "rotate(-45deg)";
//         links.classList.add("burger");

/* links.style.display = "flex";
 links.style.flexDirection = "column";
 links.style.alignItems = "center";
 links.style.position = "absolute";
 links.style.top = "118px";
 links.style.left = "50%";
 links.style.transform = "translateX(-50%)"
 links.style.background = "coral";
 links.style.width = "100%";
 links.style.height = "100%";
 linkInNav.forEach(element => (element.style.marginTop = ("15px"))); */

//     } else {
//         menu.classList.remove("open");
//         spanMiddle.style.display = "block";
//         spanBottom.style.marginTop = "5px";
//         spanBottom.style.transform = "rotate(0deg)";
//         spanTop.style.transform = "rotate(0deg)";
//         links.classList.remove("burger");
//     }  
// }