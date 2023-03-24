function showContent(id) {
    const contentElements = document.querySelectorAll(".content");
    contentElements.forEach((content) => {
        if (content.id === id) {
            content.classList.add("visible");
        } else {
            content.classList.remove("visible");
        }
    });
}

function hideOtherContentOnLoad() {
    const contentSections = document.querySelectorAll('.content');
    contentSections.forEach((section) => {
        if (section.id !== 'resume-content') {
            section.style.display = 'none';
        }
    });
}

function fadeInOnLoad() {
    const resumeContent = $('#resume-content');
    resumeContent.css('opacity', 0);
    resumeContent.animate({ opacity: 1 }, 3000);
}

$(document).ready(function () {
    hideOtherContentOnLoad();
    fadeInOnLoad();
});
