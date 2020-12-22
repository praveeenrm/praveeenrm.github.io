let burger = document.querySelector(".burger");
let navLinks = document.querySelector(".nav-links");
let aLinks = document.querySelectorAll(".nav-links li a");
let body = document.querySelector(".opacity");


burger.addEventListener("click", showNav);

function showNav(e) {
    for(let i = 0; i < aLinks.length; i++) {
        aLinks[i].classList.toggle("underline-from-left")
    }
    navLinks.classList.toggle("nav-active");

    burger.children[0].classList.toggle('line1-anime');
    burger.children[1].classList.toggle('line2-anime');
    burger.children[2].classList.toggle('line3-anime');
}


