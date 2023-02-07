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
    'counter1': './Images/Counter.png',
    'developerRole': 'Back End Dev',
    'counter2': './Images/Counter.png',
    'projectYear': '2015',
    'projectDescription': 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    'technologies': ['html', 'css', 'javascript'],
  },

  {
    'projectName': 'Multi-Post Stories',
    'clientName': 'FACEBOOK',
    'counter1': './Images/Counter.png',
    'developerRole': 'Full Stack Dev',
    'counter2': './Images/Counter.png',
    'projectYear': '2015',
    'projectDescription': 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    'technologies': ['html', 'css', 'javascript'],
    'projectImage': './Images/2 multi-post stories.png',
  },

  {
    'projectImage': './Images/3 tonic.png',
    'projectName': 'Facebook 360',
    'clientName': 'FACEBOOK',
    'counter1': './Images/Counter.png',
    'developerRole': 'Full Stack Dev',
    'counter2': './Images/Counter.png',
    'projectYear': '2015',
    'projectDescription': 'Exploring the future of media in Facebook&#8216;s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    'technologies': ['html', 'Ruby on rails', 'css', 'javascript'],
  },

  {
    'projectName': 'Uber Navigation',
    'clientName': 'uber',
    'counter1': './Images/Counter.png',
    'developerRole': 'Full Stack Dev',
    'counter2': './Images/Counter.png',
    'projectYear': '2018',
    'projectDescription': 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    'technologies': ['html', 'Ruby on rails', 'css', 'javascript'],
    'projectImage': './Images/4 multi-post stories.png',
  }
]