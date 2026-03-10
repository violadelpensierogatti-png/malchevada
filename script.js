// Seleziona tutte le immagini
const slides = document.querySelectorAll('.mySlides');
const slideCount = slides.length;
let currentSlide = 0;
const slideDuration = 4000; // Tempo totale per ogni foto (6 secondi inclusa transizione)

function nextSlide() {
    // 1. Togli la classe 'show' all'immagine attuale (inizia a sparire)
    slides[currentSlide].classList.remove('show');

    // 2. Calcola l'indice della prossima immagine
    currentSlide = (currentSlide + 1) % slideCount;

    // 3. Aggiungi la classe 'show' alla prossima immagine (inizia ad apparire)
    slides[currentSlide].classList.add('show');
}

// Avvia lo scambio automatico dopo il tempo stabilito
setInterval(nextSlide, slideDuration);
