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
  $('#nav-bar a').on('click', function (event) {
    event.preventDefault();

    const target = $(this).attr('href');
    $('.content:visible').fadeOut(1000, function () {
      $(target).fadeIn(1000);
    });
  });
}


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

document.addEventListener("DOMContentLoaded", function () {
  hideAllContent();
  fadeInOnLoad();
  handleNavClicks();
});
