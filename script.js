const btn = document.querySelector('.hamburger-btn');
const mobileMenu = document.querySelector('.nav-list-mobile-container');
const closeMenu = document.querySelector('.nav-cross-icon');
const mobileNavLinks = document.querySelectorAll('.nav-link-mobile');

function toggleMenu() {
  if (mobileMenu.style.display === 'none') {
    mobileMenu.style.display = 'block';
  } else {
    mobileMenu.style.display = 'none';
  }
}

btn.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);
mobileNavLinks.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenu);
});

const cardWorks = [
  {
    'projectImage': './Images/1 tonic.png',
    'projectName': 'Tonic',
    'clientName': 'CANOPY',
    'developerRole': 'Back End Dev',
    'projectYear': '2015',
    'projectDescription': 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    'technologies': ['html', 'css', 'javascript'],
  },

  {
    'projectImage': './Images/2 multi-post stories.png',
    'projectName': 'Multi-Post Stories',
    'clientName': 'FACEBOOK',
    'developerRole': 'Full Stack Dev',
    'projectYear': '2015',
    'projectDescription': 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    'technologies': ['html', 'css', 'javascript'],
  },

  {
    'projectImage': './Images/3 tonic.png',
    'projectName': 'Facebook 360',
    'clientName': 'FACEBOOK',
    'developerRole': 'Full Stack Dev',
    'projectYear': '2015',
    'projectDescription': 'Exploring the future of media in Facebook&#8216;s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    'technologies': ['html', 'Ruby on rails', 'css', 'javascript'],
  },

  {
    'projectImage': './Images/4 multi-post stories.png',
    'projectName': 'Uber Navigation',
    'clientName': 'uber',
    'developerRole': 'Full Stack Dev',
    'projectYear': '2018',
    'projectDescription': 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    'technologies': ['html', 'Ruby on rails', 'css', 'javascript'],
  }
]

let mobileHeading = document.querySelectorAll('.work-project-details-heading');
let desktopHeading = document.querySelectorAll('.desktop-work-project-details-heading');
let mobileClientName = document.querySelectorAll('.client-name');
let desktopClientName = document.querySelectorAll('.desktop-client-name');
let mobileDeveloperRole = document.querySelectorAll('.your-role');
let desktopDeveloperRole = document.querySelectorAll('.desktop-your-role');
let mobileProjectYear = document.querySelectorAll('.project-year');
let desktopProjectYear = document.querySelectorAll('.desktop-project-year');
let mobileProjectDescription = document.querySelectorAll('.work-project-description');
let desktopProjectDescription = document.querySelectorAll('.desktop-work-project-description');
let html = document.querySelectorAll('.html');
let css = document.querySelectorAll('.css');
let javascript = document.querySelectorAll('.javascript');
let rubyOnRails = document.querySelectorAll('.ruby-on-rails');

for (let i = 0; i < 4; i++) {
  Array.from(mobileHeading)[i].innerHTML = cardWorks[i]['projectName'];
  Array.from(desktopHeading)[i].innerHTML = cardWorks[i]['projectName'];
  Array.from(mobileClientName)[i].innerHTML = cardWorks[i]['clientName'];
  Array.from(desktopClientName)[i].innerHTML = cardWorks[i]['clientName'];
  Array.from(mobileDeveloperRole)[i].innerHTML = cardWorks[i]['developerRole'];
  Array.from(desktopDeveloperRole)[i].innerHTML = cardWorks[i]['developerRole'];
}


