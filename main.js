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
    const navLinks = document.querySelectorAll('#nav-bar a');
    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetContent = document.querySelector(event.target.getAttribute('href'));
            hideAllContent();
            $(targetContent).fadeIn(1000);
        });
    });
}

$(document).ready(function () {
    hideAllContent();
    fadeInOnLoad();
    handleNavClicks();
});
