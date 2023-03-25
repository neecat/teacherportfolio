const imageUrls = [
  'img/aawm.jpg',
  'img/performer.jpg',
  'img/instrument-demo.jpg',
  'img/production.jpg',
  'img/instruments.jpeg',
  'img/studiosession.jpeg',
  'img/instrumentdemo2.jpg',
  'img/instrument-demo.jpg',
  'img/instrument-demo1.jpeg',
  'img/berklee.JPG',
  'img/whiteboard.jpg',
];

const leftImageContainer = document.querySelector('.left-image-container');
const rightImageContainer = document.querySelector('.right-image-container');

let currentImageIndex = 0;

function updateImageContainers() {
  const contentWrapper = document.querySelector('.content-wrapper');
  contentWrapper.classList.add('sliding');

  // Update the left image container
  const previousImageIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
  leftImageContainer.style.backgroundImage = `url(${imageUrls[previousImageIndex]})`;

  // Update the right image container
  const nextImageIndex = (currentImageIndex + 1) % imageUrls.length;
  rightImageContainer.style.backgroundImage = `url(${imageUrls[nextImageIndex]})`;

  // Add slide-out class to the left image container and slide-in class to the right image container
  leftImageContainer.classList.add('slide-out');
  rightImageContainer.classList.add('slide-in');

  // Remove slide-out class from the left image container and slide-in class from the right image container after 1s
  setTimeout(() => {
    leftImageContainer.classList.remove('slide-out');
    rightImageContainer.classList.remove('slide-in');
    contentWrapper.classList.remove('sliding');
  }, 1000);

  currentImageIndex = nextImageIndex;
}






// This function hides all the content sections on page load
function hideAllContent() {
  const contentSections = document.querySelectorAll('.content');
  contentSections.forEach((section) => {
    section.style.display = 'none';
  });
}

// This function fades in the resume content section on page load
function fadeInOnLoad() {
  const resumeContent = document.getElementById("resume-content");
  resumeContent.style.opacity = 0;
  resumeContent.style.display = 'block';
  setTimeout(() => {
    resumeContent.style.transition = "opacity 3s ease-in";
    resumeContent.style.opacity = 1;
  }, 100);
}

// This function handles clicks on the navigation links
function handleNavClicks() {
  const navLinks = document.querySelectorAll("#nav-bar li a");
  const contentSections = document.querySelectorAll(".content");
  const contentWrapper = document.querySelector('.content-wrapper');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").slice(1);
      const targetContent = document.getElementById(targetId);

      contentSections.forEach((section) => {
        if (section.style.display === 'block') {
          section.style.transition = "opacity 1s ease-out";
          section.style.opacity = 0;
          setTimeout(() => {
            section.style.display = 'none';
          }, 1000);
        } else {
          section.style.opacity = 0;
          contentWrapper.classList.remove('sliding');
          updateImageContainers();
        }
      });

      setTimeout(() => {
        targetContent.style.display = 'block';
        targetContent.style.opacity = 0;
        setTimeout(() => {
          targetContent.style.transition = "opacity 1s ease-in";
          targetContent.style.opacity = 1;
        }, 100);
      }, 1000);

      updateImageContainers();
    });
  });
}



 


// This event listener runs when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  hideAllContent();
  fadeInOnLoad();
  handleNavClicks();

  setInterval(updateImageContainers, 5000);
});
