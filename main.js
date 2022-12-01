window.addEventListener('DOMContentLoaded', main);

function main() {
  addEventListeners();
  // call other function in future....
}

function addEventListeners() {
  const burgerMenuButton = document.getElementById('open-button');
  burgerMenuButton.onclick = toggleMenu;
  // burgerMenuButton.addEventListener('click', toggleMenu);
}

function toggleMenu() {
  const menu = document.querySelector("#mobile-menu");
  menu.classList.toggle("show");
}