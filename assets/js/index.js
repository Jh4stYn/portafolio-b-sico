// NAVBAR
const menu = document.getElementById("menu")
const nav = document.querySelector(".nav")
const links = nav.querySelectorAll(".menu__link")

nav.addEventListener("click", function (event) {
    if(event.target.closest("#btnOpen")) {
        menu.classList.add("show-menu")
    }
    
    if(event.target.closest("#btnClose")) {
        menu.classList.remove("show-menu")
    }

    if (event.target.matches(".menu__link")) {
        menu.classList.remove("show-menu")

        for(const link of links){
            link.classList.remove("active")
        }
        event.target.classList.add("active")
    }
})


// BLACKMODE
const body = document.body
const ls = window.localStorage
const btnTheme = document.getElementById("btnTheme")

const theme = ls.getItem("darkMode")
const sun ="bx bxs-sun"
const moon ="bx bxs-moon"

if(theme) {
    body.classList.add("dark")
    
} else {
    body.classList.remove("dark")
}

btnTheme.addEventListener("click", function () {   
    body.classList.toggle("dark")

    if(body.classList.contains("dark")) {
        ls.setItem("darkMode", true)
        btnTheme.firstElementChild.className = sun
    }else {
        ls.removeItem("darkMode")
        btnTheme.firstElementChild.className = moon
    }
})


// Typing
var typed = new Typed('#typing', {
    strings: ['Frontend Developer', 'Web Developer', 'Designer', 'Fullstack Developer'],
    typeSpeed: 50,
    backSpeed: 50,
    startDelay: 25,
    loop: true,
    loopCount: Infinity,
});


// ScrollReveal
const sr = new ScrollReveal ({
    origin: "top",
    distance: "80px",
    duration: 2000, 
    reset: true,
})

sr.reveal(".hero__content-img", {origin: "left", distance: "100px",}) 
sr.reveal(".hero__content-body", {origin: "right", distance: "100px",}) 
sr.reveal(".about p", {origin: "bottom", distance: "100px", duration: 2300}) 
sr.reveal(".about p+p", {origin: "bottom", distance: "90px", duration: 2500}) 
sr.reveal(".skills__content", {origin: "top", distance: "100px"})


// ScrollSpy
const hero = document.getElementById("hero") //0
const about = document.getElementById("about") //1
const skills = document.getElementById("skills") //2
const review = document.getElementById("review") //3 
const contact = document.getElementById("contact") //4

const addActive = function(index){
    for(const link of links){
        link.classList.remove("active")
    }
    links[index].classList.add("active")
}

const checkElement = element =>
    element.getBoundingClientRect().top > -1 &&
    element.getBoundingClientRect().top < 200

window.addEventListener("scroll", function () {
    if(checkElement(hero)){
        addActive(0)
    }else if(checkElement(about)){
        addActive(1)
    }else if(checkElement(skills)){
        addActive(2)
    }else if(checkElement(review)){
        addActive(3)
    }else if(checkElement(contact)){
        addActive(4)
    }
})

