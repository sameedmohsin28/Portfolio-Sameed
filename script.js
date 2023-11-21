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
    projectImage: './Images/fastLaneRacers.PNG',
    projectName: 'Fast Lane Racers',
    clientName: 'Personal Project',
    developerRole: 'Full-stack',
    projectYear: '2023',
    projectDescription: 'An app for users to book an appointment to test drive cars.',
    projectDescPopupDesk: 'An app for users to book an appointment to test drive cars.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Ruby on rails', 'PostgreSQL'],
    sourceCodeLink: 'https://github.com/muneeb3123/Fast-Lane-Racers-front-end',
    liveDeployedLink: 'https://shiny-longma-bba6fb.netlify.app/',
  },

  {
    projectImage: './Images/expenseTracker.PNG',
    projectName: 'Expense Tracker',
    clientName: 'Personal Project',
    developerRole: 'Full-stack',
    projectYear: '2023',
    projectDescription: 'This app lets users keep track of their expenses and divide them into categories..',
    projectDescPopupDesk: 'This app lets users keep track of their expenses and divide them into categories.',
    technologies: ['Ruby on rails', 'PostgreSQL'],
    sourceCodeLink: 'https://github.com/sameedmohsin28/Expense-Tracker',
    liveDeployedLink: 'https://rails-xez4.onrender.com/',
  },

  {
    projectImage: './Images/forexRates.JPG',
    projectName: 'ForEx Rates',
    clientName: 'Personal Project',
    developerRole: 'Front-end',
    projectYear: '2023',
    projectDescription: 'Fetches data from exchange rate API to display currency exchange rates and lets users convert any specific amount from one currency to another.',
    projectDescPopupDesk: 'Fetches data from exchange rate API to display currency exchange rates and lets users convert any specific amount from one currency to another.',
    technologies: ['HTMLS', 'CSS', 'JavaScript', 'React', 'Redux'],
    sourceCodeLink: 'https://github.com/sameedmohsin28/currency-exchange-rate',
    liveDeployedLink: 'https://forexrates.netlify.app/',
  },

  {
    projectImage: './Images/restaurantMeal.PNG',
    projectName: 'Restaurant Meals',
    clientName: 'Personal Project',
    developerRole: 'Front-end',
    projectYear: '2023',
    projectDescription: 'Fetches data from MealDB API to display meals and their recipes. It also lets users comment and book reservations on those meals.',
    projectDescPopupDesk: 'Fetches data from MealDB API to display meals and their recipes. It also lets users comment and book reservations on those meals.',
    technologies: ['HTMLS', 'CSS', 'JavaScript', 'React', 'Redux'],
    sourceCodeLink: 'https://github.com/sameedmohsin28/space-traveller-s-hub',
    liveDeployedLink: 'http://clintonyounge.me/JS-Capstone-Group-Project/dist/',
  },
];

const worksPage = document.querySelector('.works-page');

cardWorks.forEach((project) => {
  worksPage.innerHTML += `
  <article class="project-work-card">
    <img src="${project.projectImage}" alt="Screenshot of first project" class="work-project-image">
    <div class="work-project-details">
      <h2 class="work-project-details-heading">${project.projectName}</h2>
      <div class="work-project-highlights">
        <span class="client-name">${project.clientName}</span>
        <img src="./Images/Counter.png" alt="" class="dot">
        <span class="your-role">${project.developerRole}</span>
        <img src="./Images/Counter.png" alt="" class="dot">
        <span class="project-year">${project.projectYear}</span>
      </div>
      <p class="work-project-description">${project.projectDescription}</p>
      <ul class="project-languages-tags">
        ${project.technologies.map((tech) => 
          `<li class="tech">${tech}</li>`
        ).join('')}
      </ul>
      <button class="project-link-button">See Project</button>
    </div>
  </article>
  `;
});

const popupWorks = document.querySelector('.popup-works');

cardWorks.forEach((project) => {
  popupWorks.innerHTML += `
  <article class="popup-card">
    <div class="popup-work-project-details">
      <div class="popup-heading-close-button">
        <h2 class="popup-work-project-details-heading">${project.projectName}</h2>
        <img src="./Images/popupCross.png" alt="" class="popup-cross-button">
      </div>
      <div class="popup-work-project-highlights">
        <span class="popup-client-name">${project.clientName}</span>
        <img src="./Images/Counter.png" alt="" class="dot">
        <span class="popup-your-role">${project.developerRole}</span>
        <img src="./Images/Counter.png" alt="" class="dot">
        <span class="popup-project-year">${project.projectYear}</span>
      </div>
    </div>
    <img src="${project.projectImage}" alt="Screenshot of first project" class="popup-work-project-image">
    <div class="popup-description-tags-buttons">
      <p class="popup-work-project-description">${project.projectDescPopupDesk}</p>
      <div class="popup-tags-buttons">
        <ul class="popup-tags">
        ${project.technologies.map((tech) => 
          `<li class="tech">${tech}</li>`
        ).join('')}
        </ul>
        <img src="./Images/Divider.png" alt="" class="popup-tags-buttons-divider">
        <div class="popup-buttons">
          <a href="${project.liveDeployedLink}" class="popup-see-live-button" target="_blank">See live <img src="./Images/seeLiveButton.png" alt="" class="see-live-icon"></a>
          <a href="${project.sourceCodeLink}" class="popup-see-source-button" target="_blank">See source <img src="./Images/seeSourceButon.svg" alt="" class="see-source-icon"></a>
        </div>
      </div>
    </div>
  </article>
  `;
});

const seeProject = Array.from(document.querySelectorAll('.project-link-button'));
const closePopup = Array.from(document.querySelectorAll('.popup-cross-button'));
const popupCard = Array.from(document.querySelectorAll('.popup-card'));

for (let i = 0; i < cardWorks.length; i += 1) {
  seeProject[i].addEventListener('click', () => {
    popupCard[i].style.display = 'grid';
  });

  closePopup[i].addEventListener('click', () => {
    popupCard[i].style.display = 'none';
  });
}

const form = document.getElementById('contactForm');
// const email = document.getElementById('email')
const emailRegex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
const errorMsg = document.querySelector('.email-case-error');
// const emailCase = emailRegex.test(email);
// console.log(emailCase);
// console.log('Hi')

function validityEmail(email) {
  if (emailRegex.test(email) === true) {
    errorMsg.style.display = 'none';
    return true;
  }
  errorMsg.style.display = 'block';
  return false;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValid = validityEmail(document.getElementById('email').value);
  // console.log(document.getElementById('email').value);
  if (emailValid === true) {
    form.submit();
  }
});