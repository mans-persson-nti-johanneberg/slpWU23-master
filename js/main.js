
let button = document.querySelector("#menu-button");
let menu = document.querySelector(".menu");
let fade = document.querySelector(".fade-layer");


button.addEventListener("click", showMenu)
fade.addEventListener("click", showMenu)

function showMenu(){
    console.log("gwibje");
    menu.classList.toggle("show")
    fade.classList.toggle("visible")
}

