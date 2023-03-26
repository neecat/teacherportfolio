$(document).ready(function () {
  const bannerBgs = $(".banner .banner-bg");
  const imagePath = $(".banner").attr("data-image-path");
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
  ];

  let imageIndex = 0;
  let activeBgIndex = 0;

  function setBackgroundImage() {
    const imageURL = imagePath + images[imageIndex];
    const inactiveBgIndex = (activeBgIndex + 1) % 2;
    bannerBgs.eq(inactiveBgIndex).css("background-image", `url(${imageURL})`);
    bannerBgs.eq(activeBgIndex).css("opacity", 0);
    bannerBgs.eq(inactiveBgIndex).css("opacity", 1);
    activeBgIndex = inactiveBgIndex;
  }

  setBackgroundImage();
  setInterval(() => {
    imageIndex = (imageIndex + 1) % images.length;
    setBackgroundImage();
  }, 5000);
});

// Rest of your code (unchanged)


let currentImageIndex = 0;

function updateImage() {
  const imageClass = `image-${currentImageIndex + 1}`; // Add 1 to make it 1-based index
  $(".banner").css("background-image", `url(${images[currentImageIndex]})`);
  $(".banner").attr("class", `banner ${imageClass}`);
  currentImageIndex = (currentImageIndex + 1) % images.length;
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
