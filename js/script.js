const navBar = document.querySelector(".nav__menu");
const navList = document.querySelectorAll(".nav__link");
const openMenu = document.querySelector(".open__btn");
const closeMenu = document.querySelector(".close__btn");
const overlay = document.querySelector(".overlay");

openMenu.addEventListener("click", () => {
    navBar.classList.toggle("active");
    overlay.classList.add("active");
});

navList.forEach(list => {
    list.addEventListener("click", () => {
        navList.forEach(l => l.classList.remove("active"));
        
        list.classList.add("active")
        navBar.classList.remove("active");
        navBar.classList.remove("active");
    });
});

closeMenu.addEventListener("click", () => {
    navBar.classList.remove("active");
    overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
    navBar.classList.remove("active");
})