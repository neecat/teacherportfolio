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
    const resumeContent = document.getElementById('resume-content');
    resumeContent.style.opacity = '0';
    setTimeout(() => {
        resumeContent.style.opacity = '1';
    }, 100);
}

window.onload = function () {
    hideOtherContentOnLoad();
    fadeInOnLoad();
};
