// setInterval(() => console.log(document.body.scrollHeight), 100);
// for (const key in document) {
//   if (document[key]) console.log(`${key} : ${document[key]}`);
// }

document.addEventListener("scroll", () => {
    window.innerWidth = 500;
    console.log(scrollY);
})
// const link = document.getElementsByClassName('navbar__link')
const burgerButton = document.getElementById("navbar__button");
const navbarMenu = document.getElementById('navbar__menu');
const navbarLogo = document.getElementById('navbar__logo');

let isActive = false;

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle('navbar__button_active');
  navbarMenu.classList.toggle('navbar__menu_active');
  navbarLogo.classList.toggle('navbar__logo_active');
});


// navbarLogo.addEventListener("click", () => {
//   burgerButton.classList.toggle('navbar__button_active');
//   navbarMenu.classList.toggle('navbar__menu_active');
//   navbarLogo.classList.toggle('navbar__logo_active');
//   console.log(`hi`);
// });
// burgerButton.addEventListener("click", () => {
//   console.log(burgerButton);
// });

// link[0].addEventListener('click', ()=>{
//     console.log(link[0].style);
// })

// console.log();
