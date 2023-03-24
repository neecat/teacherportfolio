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
function fadeInOnLoad() {
    const resumeContent = document.getElementById('resume-content');
    resumeContent.style.display = 'block';
    setTimeout(() => {
        resumeContent.style.opacity = '1';
    }, 100);
}

// Call the fadeInOnLoad function when the script runs
fadeInOnLoad();
