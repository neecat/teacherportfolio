function hideAllContent() {
  const contentSections = document.querySelectorAll('.content');
  contentSections.forEach((section) => {
    section.style.display = 'none';
  });
}

function fadeInOnLoad() {
  const resumeContent = document.getElementById("resume-content");
  resumeContent.style.opacity = 0;
  resumeContent.style.display = 'block';
  setTimeout(() => {
    resumeContent.style.transition = "opacity 3s ease-in";
    resumeContent.style.opacity = 1;
  }, 100);
}

function handleNavClicks() {
  const navLinks = document.querySelectorAll("#nav-bar li a");
  const contentSections = document.querySelectorAll(".content");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").slice(1);
      const targetContent = document.getElementById(targetId);

      contentSections.forEach((section) => {
        section.style.display = 'none';
      });

      targetContent.style.display = 'block';
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  hideAllContent();
  fadeInOnLoad();
  handleNavClicks();
});
