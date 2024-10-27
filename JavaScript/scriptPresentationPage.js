// Fonctions pour navigation entre les sections
function nextPage() {
    const currentSection = document.querySelector(".centered-section:target") || document.getElementById("presentation");
    const nextSection = currentSection.nextElementSibling;
    if (nextSection && nextSection.classList.contains("centered-section")) {
        nextSection.scrollIntoView({ behavior: "smooth" });
    }
}

function prevPage() {
    const currentSection = document.querySelector(".centered-section:target") || document.getElementById("presentation");
    const prevSection = currentSection.previousElementSibling;
    if (prevSection && prevSection.classList.contains("centered-section")) {
        prevSection.scrollIntoView({ behavior: "smooth" });
    }
}
// JavaScript source code
