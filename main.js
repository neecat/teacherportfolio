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
