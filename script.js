//navbar section
const toggle = document.querySelector(".toggle");
const closeMenu = document.querySelector(".close-menu");
const navbarMenu = document.querySelector(".navbar");
const backgroundMobile = document.querySelector(".background-menu-mobile");

toggle.addEventListener("click", () => {
    navbarMenu.classList.add("navbar-active");
    backgroundMobile.classList.add("navbar-active");
});

closeMenu.addEventListener("click", () => {
    navbarMenu.classList.remove("navbar-active");
    backgroundMobile.classList.remove("navbar-active");
})


//dropdown section
document.querySelectorAll(".dropdown-container").forEach(function(dropdown){
    dropdown.addEventListener("click", function(){
        dropdown.lastElementChild.classList.toggle("show");
    });
});
