// liste des images, des textes et des gifs de chaque tourelle
const items = [
    {
        imageSrc: 'Tourelle_Gladys_etiquette_V2.jpg',
        gifSrc: 'gif1.gif',
        text: 'La tourelle Gladys description.'
    },
    {
        imageSrc: 'image2.jpg',
        gifSrc: 'gif2.gif',
        text: 'Voici la deuxième image, un autre GIF et un autre texte.'
    },
    {
        imageSrc: 'image3.jpg',
        gifSrc: 'gif3.gif',
        text: 'Troisième image, troisième GIF et un texte différent.'
    },
    {
        imageSrc: 'image4.jpg',
        gifSrc: 'gif4.gif',
        text: 'Quatrième image, quatrième GIF et encore un texte unique.'
    },
];

let currentIndex = 0;
// Fonction pour changer l'image, le GIF et le texte
function changeContent() {
    // Obtenir les éléments HTML
    const imageElement = document.getElementById('image');
    const gifElement = document.getElementById('video');
    const textElement = document.getElementById('texte');