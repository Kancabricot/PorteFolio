const imageSources = [
    '../../Images/cdTurret/TOURELLE_BASE.png',
    '../../Images/cdTurret/TOURELLE_CANON.png',
    '../../Images/cdTurret/TOURELLE_ENCEINTE.png',
    '../../Images/cdTurret/TOURELLE_FEU.png',
    '../../Images/cdTurret/TOURELLE_GLADYS.png',
    '../../Images/cdTurret/TOURELLE_GLUE.png',
    '../../Images/cdTurret/TOURELLE_MARTEAU.png',
    '../../Images/cdTurret/TOURELLE_NEIGE.png',
    '../../Images/cdTurret/TOURELLE_TDE.png',
    '../../Images/cdTurret/TOURELLE_TESLA.png',
];

const numberOfImages = 20;
const container = document.getElementById('decor-background');
const placedElements = []; // Pour stocker les positions des éléments

// Fonction pour appliquer la rotation aléatoire
function getRandomRotation() {
    return (Math.random() * 50 - 25) + 'deg';  // entre -25° et 25°
}

// Fonction pour vérifier le chevauchement
function checkOverlap(newX, newY, width, height) {
    return placedElements.some(({ x, y, w, h }) => {
        const distanceX = Math.abs(newX - x);
        const distanceY = Math.abs(newY - y);
        return distanceX < w && distanceY < h; // Si l'image est trop proche d'une autre
    });
}

// Fonction pour obtenir une position non chevauchante
function getNonOverlappingPosition(width, height) {
    let newX, newY;

    // Rechercher une position non chevauchante
    do {
        newX = Math.random() * (window.innerWidth - width);
        newY = Math.random() * (window.innerHeight - height);
    } while (checkOverlap(newX, newY, width, height));

    // Ajouter la position à la liste des éléments placés
    placedElements.push({ x: newX, y: newY, w: width, h: height });

    return { x: newX, y: newY };
}

for (let i = 0; i < numberOfImages; i++) {
    const div = document.createElement('div');
    div.classList.add('decor-element');

    // Choisir une image au hasard
    div.style.backgroundImage = `url(${imageSources[Math.floor(Math.random() * imageSources.length)]})`;

    const width = 100;  // Largeur de l'image
    const height = 100; // Hauteur de l'image
    const { x, y } = getNonOverlappingPosition(width, height); // Position non chevauchante

    div.style.left = `${x}px`;
    div.style.top = `${y}px`;

    // Appliquer une rotation aléatoire lors de la création
    const rotation = getRandomRotation();
    div.style.transform = `rotate(${rotation})`; // Appliquer la rotation initiale

    // Stocker des données supplémentaires pour chaque image
    div.dataset.baseY = y;  // Position initiale en Y
    div.dataset.speed = 0.2 + Math.random() * 0.5;  // Vitesse aléatoire pour la parallaxe
    div.dataset.rotation = rotation;  // Stocke la rotation pour la garder fixe

    container.appendChild(div);
}

// Gérer la parallaxe au scroll
/**window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const elements = document.querySelectorAll('.decor-element');

    elements.forEach(el => {
        const speed = parseFloat(el.dataset.speed);
        const rotation = el.dataset.rotation;  // Utilise la rotation stockée

        // Applique le mouvement vertical sans changer la rotation
        // Utilise "translateY" pour le mouvement, mais ne touche pas à la rotation
        el.style.transform = `rotate(${rotation}) translateY(${scrollY * speed}px)`;  // Ne change que le Y
    });
});**/