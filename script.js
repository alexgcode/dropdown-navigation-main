//navbar section
const toggle = document.querySelector(".toggle");
const navbarMenu = document.querySelector(".navbar-menu");

toggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("navbar-menu-active");
});


//dropdown section

/*document.querySelector(".dropdown-container").addEventListener("click", function(){
    document.querySelector(".dropdown-container ul").classList.toggle("show");
});
*/

document.querySelectorAll(".dropdown-container").forEach(function(dropdown){
    dropdown.addEventListener("click", function(){
        dropdown.lastElementChild.classList.toggle("show");
    });
});