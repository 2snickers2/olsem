function initMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuBtnOpen = document.querySelector('.menu-btn-open');
  const menuBtnClose = document.querySelector('.menu-btn-close');

  const toggleMenu = () => mobileMenu.classList.toggle('is-open');

  if (menuBtnOpen && mobileMenu && menuBtnClose) {
    menuBtnOpen.addEventListener('click', toggleMenu);
    menuBtnClose.addEventListener('click', toggleMenu);
  }
}

document.addEventListener("menuLoaded", initMobileMenu);

document.addEventListener("DOMContentLoaded", () => {
  const menuExists = document.querySelector('.menu-btn-open');
  if (menuExists) {
    initMobileMenu();
  }
});
