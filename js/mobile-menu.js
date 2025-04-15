const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');

if (menuBtnOpen) {
  menuBtnOpen.addEventListener('click', toggleMenu);
}
if (menuBtnClose) {
  menuBtnClose.addEventListener('click', toggleMenu);
}