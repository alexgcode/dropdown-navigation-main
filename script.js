const toggle = document.querySelector(".toggle");
const navbarMenu = document.querySelector(".navbar-menu");

toggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("navbar-menu-active");
});