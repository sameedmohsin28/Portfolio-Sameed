let btn = document.querySelector(".hamburger-btn");
let mobileMenu = document.querySelector(".nav-list-mobile-container");
let closeMenu = document.querySelector(".nav-cross-icon")
let mobileNavLinks = document.querySelector(".nav-link-mobile")
function toggleMenu () {
  if (mobileMenu.style.display == "none") {
      mobileMenu.style.display = "block";
  } else {
      mobileMenu.style.display = 'none'; 
  }
}

btn.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);
mobileNavLinks.addEventListener('click', toggleMenu);