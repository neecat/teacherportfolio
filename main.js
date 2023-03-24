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

// Call the hideOtherContentOnLoad function when the script runs
hideOtherContentOnLoad();

function fadeInOnLoad() {
    const resumeContent = document.getElementById('resume-content');
    resumeContent.style.display = 'block';
    setTimeout(() => {
        resumeContent.style.opacity = '1';
    }, 100);
}

// Call the fadeInOnLoad function after the hideOtherContentOnLoad function
fadeInOnLoad();

