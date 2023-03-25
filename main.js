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
  'img/berklee.jpg',
  'img/whiteboard.jpg',
  
];
//Image Slideshow
let currentImageIndex = 0;

function updateImageContainers() {
  const leftImageContainer = document.querySelector('.left-image-container');
  const rightImageContainer = document.querySelector('.right-image-container');

  // Update the left image container
  const previousImageIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
  const previousImageContainer = currentImageIndex === 0 ? rightImageContainer : leftImageContainer;
  previousImageContainer.classList.add('sliding-out');
  setTimeout(() => {
    previousImageContainer.style.backgroundImage = `url(${imageUrls[previousImageIndex]})`;
    previousImageContainer.classList.remove('sliding-out');
  }, 1000);

  // Update the right image container
  const nextImageIndex = (currentImageIndex + 1) % imageUrls.length;
  const nextImageContainer = currentImageIndex === imageUrls.length - 1 ? leftImageContainer : rightImageContainer;
  nextImageContainer.classList.add('sliding-in');
  setTimeout(() => {
    nextImageContainer.style.backgroundImage = `url(${imageUrls[nextImageIndex]})`;
    nextImageContainer.classList.remove('sliding-in');
  }, 1000);

  currentImageIndex = nextImageIndex;
}

setInterval(updateImageContainers, 5000);


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
    });
  });
}

// This event listener runs when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  hideAllContent();
  fadeInOnLoad();
  handleNavClicks();
});
