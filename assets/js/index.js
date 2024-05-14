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