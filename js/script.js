const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");

burger.addEventListener("click", ()=>{
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=>{
    burger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// SCROLL EFFECT
const header = document.querySelector(".header");

document.addEventListener("scroll", ()=>{
    if(window.scrollY > 0){
        header.classList.add("scrolled");
    }
    else{
        header.classList.remove("scrolled");
    }
})