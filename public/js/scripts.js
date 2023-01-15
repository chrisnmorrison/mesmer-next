// define all UI letiable
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

let prevScrollpos = window.scrollY;
window.onscroll = function() {
let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

let myNav = document.querySelector('.navbar');
window.onscroll = function () { 
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};