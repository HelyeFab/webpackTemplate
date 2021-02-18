
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

const navToggler = document.querySelector(".navbar__toggler");
const navTogglerBurger = document.querySelector(".navbar__toggler-burger");
const navBar = document.querySelector(".navbar__menu");



// ! Adding an event listenter to the burger so that it can transform into an X and open the menu
navToggler.addEventListener('click', () => {
  navTogglerBurger.classList.toggle("open");
  navBar.classList.toggle("active");
// ! Adding an event listenter to the entire menu so that wherever the user clicks both the burger and the menu can be closed 
  navBar.addEventListener("mouseup", () => {
    navTogglerBurger.classList.remove("open");
    navBar.classList.remove("active");
  });
})


// ! 

console.log('hello from the app');