// define all UI variable
const navToggler = document.querySelector('.navbar-toggler');
const navMenu = document.querySelector('#main-nav');

// load all event listners
allEventListeners();

// functions of all event listners
function allEventListeners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event

}

// togglerClick function
function togglerClick() {
//   navToggler.classList.toggle('collapse');
  navMenu.classList.toggle('collapse');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}