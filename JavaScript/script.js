// Code pour la navigation en défilement fluide
//const button = document.getElementById("runaway-button");

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/**button.addEventListener("mousemove", (event) => {
    const buttonRect = button.getBoundingClientRect();
    const offset = 100; // Distance à maintenir entre la souris et le bouton

    // Calcul de la distance entre la souris et le centre du bouton
    const dx = event.clientX - (buttonRect.left + buttonRect.width / 2);
    const dy = event.clientY - (buttonRect.top + buttonRect.height / 2);
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < offset) {
        // Calcul de la direction opposée
        const angle = Math.atan2(dy, dx);
        const moveX = Math.cos(angle) * offset;
        const moveY = Math.sin(angle) * offset;

        // Déplacement du bouton
        const newLeft = buttonRect.left + moveX;
        const newTop = buttonRect.top + moveY;

        // Contrainte des limites de la fenêtre pour que le bouton ne sorte pas de l'écran
        button.style.left = `${Math.min(window.innerWidth - buttonRect.width, Math.max(0, newLeft))}px`;
        button.style.top = `${Math.min(window.innerHeight - buttonRect.height, Math.max(0, newTop))}px`;
    }
});**/

