function fadeInOnLoad() {
  const resumeContent = document.getElementById("resume-content");
  resumeContent.style.opacity = 0;
  setTimeout(() => {
    resumeContent.style.opacity = 1;
    resumeContent.style.transition = "opacity 3s ease-in";
  }, 100);
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

  fadeInOnLoad();
});
