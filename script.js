let btn = document.querySelector(".hamburger-btn")
let mobileMenu = document.querySelector(".nav-list-mobile-container")

function toggleMenu (
    if (mobileMenu.style.display != 'none') {
        mobileMenu.style.display == 'none'
    } else {
        mobileMenu.style.display == 'block'  
    }

    btn.addEventListener('click', toggleMenu)
)