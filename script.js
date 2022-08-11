//navbar section
const toggle = document.querySelector(".toggle");
const navbarMenu = document.querySelector(".navbar");

toggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("navbar-menu-active");
});


//dropdown section

document.querySelectorAll(".dropdown-container").forEach(function(dropdown){
    dropdown.addEventListener("click", function(){
        dropdown.lastElementChild.classList.toggle("show");
    });
});