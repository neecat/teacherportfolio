function hideAllContent() {
    const contentSections = document.querySelectorAll('.content');
    contentSections.forEach((section) => {
        section.style.display = 'none';
    });
}

function fadeInOnLoad() {
    const resumeContent = $('#resume-content');
    resumeContent.css('opacity', 0);
    resumeContent.animate({ opacity: 1 }, 3000);
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



$(document).ready(function () {
    hideAllContent();
    fadeInOnLoad();
    handleNavClicks();
});
init();
