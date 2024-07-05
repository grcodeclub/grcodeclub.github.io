const prevButton = document.querySelector('.slide-prev');
const nextButton = document.querySelector('.slide-next');
const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slides .card');

let currentIndex = 0;
let slideWidth = slideContainer.clientWidth;
const totalSlides = slides.length;

// Έλεγχος αν υπάρχει αποθηκευμένο currentIndex στο localStorage
if (localStorage.getItem('currentIndex')) {
    currentIndex = parseInt(localStorage.getItem('currentIndex'));
}

function updateSliderPosition() {
    const slideOffset = slides[currentIndex].offsetLeft;
    slideContainer.style.transform = `translateX(-${slideOffset}px)`;
    updateButtonVisibility(); // Ελέγχει την ορατότητα των κουμπιών κάθε φορά που ενημερώνεται η θέση
}

function updateButtonVisibility() {
    if (currentIndex === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }

    if (currentIndex === totalSlides - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    }
    updateSliderPosition();
    // Αποθήκευση του currentIndex στο localStorage
    localStorage.setItem('currentIndex', currentIndex.toString());
});

nextButton.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    }
    updateSliderPosition();
    // Αποθήκευση του currentIndex στο localStorage
    localStorage.setItem('currentIndex', currentIndex.toString());
});

// Ανανέωση του slideWidth στην αλλαγή του μεγέθους του παραθύρου
window.addEventListener('resize', () => {
    slideWidth = slideContainer.clientWidth;
    updateSliderPosition();
});

// Αρχικοποίηση της θέσης του slider και της ορατότητας των κουμπιών
updateSliderPosition();
updateButtonVisibility();
