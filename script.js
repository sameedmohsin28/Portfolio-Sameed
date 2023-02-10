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
    projectImage: './Images/1 tonic.png',
    projectName: 'Tonic',
    clientName: 'CANOPY',
    developerRole: 'Back End Dev',
    projectYear: '2015',
    projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectDescPopupDesk: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8216;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8216;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8216;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['html', 'css', 'javascript', 'Ruby on rails', 'github', 'Bootstraps', 'ruby'],
  },

  {
    projectImage: './Images/2 multi-post stories.png',
    projectName: 'Multi-Post Stories',
    clientName: 'FACEBOOK',
    developerRole: 'Full Stack Dev',
    projectYear: '2015',
    projectDescription: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    projectDescPopupDesk: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8216;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8216;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8216;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['html', 'css', 'javascript', 'Ruby on rails', 'github', 'Bootstraps', 'ruby'],
  },

  {
    projectImage: './Images/3 tonic.png',
    projectName: 'Facebook 360',
    clientName: 'FACEBOOK',
    developerRole: 'Full Stack Dev',
    projectYear: '2015',
    projectDescription: 'Exploring the future of media in Facebook&#8216;s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    projectDescPopupDesk: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8216;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8216;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8216;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea <br>',
    technologies: ['html', 'css', 'javascript', 'Ruby on rails', 'github', 'Bootstraps', 'ruby'],
  },

  {
    projectImage: './Images/4cardImage.png',
    projectName: 'Uber Navigation',
    clientName: 'Uber',
    developerRole: 'Full Stack Dev',
    projectYear: '2018',
    projectDescription: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    projectDescPopupDesk: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8216;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8216;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8216;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    technologies: ['html', 'css', 'javascript', 'Ruby on rails', 'github', 'Bootstraps', 'ruby'],
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
        <li class="html">${project.technologies[0]}</li>
        <li class="ruby-on-rails">${project.technologies[3]}</li>
        <li class="css">${project.technologies[1]}</li>
        <li class="javascript">${project.technologies[2]}</li>
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
        <ul class="popup-first-three-tags">
          <li class="popup-technology popup-html">${project.technologies[0]}</li>
          <li class="popup-technology popup-css">${project.technologies[1]}</li>
          <li class="popup-technology popup-javascript">${project.technologies[2]}</li>
        </ul>
        <ul class="popup-last-three-tags">
          <li class="popup-technology popup-github">${project.technologies[4]}</li>
          <li class="popup-technology popup-ruby">${project.technologies[6]}</li>
          <li class="popup-technology   popup-bootstraps">${project.technologies[5]}</li>
        </ul>
        <img src="./Images/Devider.png" alt="" class="popup-tags-buttons-divider">
        <div class="popup-buttons">
          <button class="popup-see-live-button">See live <img src="./Images/seeLiveButton.png" alt="" class="see-live-icon"></button>
          <button class="popup-see-source-button">See source <img src="./Images/seeSourceButon.svg" alt="" class="see-source-icon"></button>
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
    popupCard[i].style.display = 'flex';
  });

  closePopup[i].addEventListener('click', () => {
    popupCard[i].style.display = 'none';
  });
}

const form = document.getElementById('contactForm');
const email = document.getElementById('email')
const emailRegex = /^[a-z_\-0-9\.\*\#\$\!\~\%\^\&\-\+\?\|]+@+[a-z\-0-9]+(.com)$/;
const errorMsg = document.querySelector('.email-case-error');
// const emailCase = emailRegex.test(email);
// console.log(emailCase);
// console.log('Hi')

function validityEmail(email) {
  if (emailRegex.test(email)) {
    errorMsg.style.display = 'none';
    return true;
  } else {
    errorMsg.style.display = 'block';
    return false;
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValid = validityEmail(document.querySelector('.email-case-error'));
  console.log(emailValid);
  if (emailValid === true) {
    form.submit();
  }
});