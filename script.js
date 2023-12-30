//  Composant iconique de moult pages web, il faut savoir en coder un.
//   Deux boutons, des slides qui ... slident, voilà ce qu'il y a faire.
//   Creusez-vous la tête, il existe de multiples façon de le faire, mais toutes ne sont pas aussi bonne les unes ques les autres

//   A. Coder une interface basique
// Codez d'abord une interface très simple, contenant les éléments importants : boutons, inputs, liens, etc...
// Rajoutez un peu de style si besoin est. 

// Puis codez les fonctionnalités JavaScript.

// B. Fonctionnalités JavaScript à coder pour ce projet

// 1. Pensez globalement au problème à résoudre, vous allez très probablement avoir besoin d'indexs, d'une variable pour bloquer l'animation, etc ...
// 2. Gérez le clic sur les boutons.
// 3. Décomposez l'animation : 
// - Une slide sort avec un effet retro et disparaît en glissant.
// - Une slide arrivant en apparaissant.
// 4. N'oubliez pas de revenir à zéro quand on atteint l'index final et qu'on clic à droite, ou inversement.

// C. Ajoutez du style à l'interface afin de terminer le projet.

// variables
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.mySlides');
const totalSlides = slides.length;
slides[currentSlideIndex].style.display = 'block';


// Fonction qui gère l'affichage des slides
function showSlide(index, direction) {
    if (index < 0) {
        currentSlideIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentSlideIndex = 0;
    } else {
        currentSlideIndex = index;
    }

    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = 'none';
    }

    // ajuste la position de la slide entrante en fonction du bouton pressé
    const initialPosition = direction == 'next' ? '-100%' : '100%';
    slides[currentSlideIndex].style.transform = `translateX(${initialPosition})`;

    // Affiche la slide currentSlideIndex
    slides[currentSlideIndex].style.display = 'block';
    slides[currentSlideIndex].style.animation = 'slide-in 0.5s ease-in-out forwards';

}

// Bouton flèche droite
function nextSlide() {
    slides[currentSlideIndex].style.transform = `translateX(0%)`;
    slides[currentSlideIndex].style.animation = 'slide-out-right 0.5s ease-in-out forwards';

    setTimeout(() => {
        showSlide(currentSlideIndex - 1, 'next');
    }, 600);


}

// Bouton flèche gauche
function prevSlide() {
    slides[currentSlideIndex].style.transform = `translateX(0%)`;
    slides[currentSlideIndex].style.animation = 'slide-out-left 0.5s ease-in-out forwards';

    setTimeout(() => {
        showSlide(currentSlideIndex + 1, 'prev');
    }, 600);

}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);