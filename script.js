//navbar section
const toggle = document.querySelector(".toggle");
const closeMenu = document.querySelector(".close-menu");
const navbarMenu = document.querySelector(".navbar");

toggle.addEventListener("click", () => {
    navbarMenu.classList.add("navbar-menu-active");
});

closeMenu.addEventListener("click", () => {
    navbarMenu.classList.remove("navbar-menu-active");
})


//dropdown section

document.querySelectorAll(".dropdown-container").forEach(function(dropdown){
    dropdown.addEventListener("click", function(){
        dropdown.lastElementChild.classList.toggle("show");
    });
});