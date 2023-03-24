function hideAllContent() {
  const contentSections = document.querySelectorAll('.content');
  contentSections.forEach((section) => {
    section.style.display = 'none';
  });
}

function fadeInOnLoad() {
  const resumeContent = $("#resume-content");
  resumeContent.css("opacity", 0);
  resumeContent.animate({ opacity: 1 }, 3000);
}


document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("#nav-bar li a");
  const contentSections = document.querySelectorAll(".content");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").slice(1);
      const targetContent = document.getElementById(targetId);

      contentSections.forEach((section) => {
        section.classList.remove("visible");
        section.classList.remove("fade");
      });

      targetContent.classList.add("visible");
      targetContent.classList.add("fade");
    });
  });
});

$(document).ready(function () {
  hideAllContent();
  fadeInOnLoad();
});
