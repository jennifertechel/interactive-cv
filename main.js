/** Event that waits for HTML document to load before executing main function */
window.addEventListener('DOMContentLoaded', main);

/** Calling on another function */
function main() {
    addEvents();
}

/** Function that adds click event that calls on next function */
function addEvents() {
    /** @type {HTMLButtonElement} getting button from document */
    const menuButton = document.getElementById('open-button');
    menuButton.onclick = toggleMenu;
}

/** Function that toggles class that hides and displays menu */
function toggleMenu() {
    /** @type {HTMLDivElement} getting hidden from document */
    const menu = document.querySelector("#mobile-menu");
    menu.classList.toggle("hide");
}

let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
  }
  
  let observer = new IntersectionObserver(callback, options);

