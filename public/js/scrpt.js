const burgerButton = document.getElementsByClassName("navbar__button")[0];
const navbarMenu = document.getElementsByClassName("navbar__menu")[0];
const navbarLogo = document.getElementsByClassName("navbar__logo")[0];

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle('navbar__button_active');
  navbarMenu.classList.toggle('navbar__menu_active');
  navbarLogo.classList.toggle('navbar__logo_active');
});

// document.addEventListener("scroll", () => {
//     console.log(scrollY);
// })