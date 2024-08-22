document.addEventListener("DOMContentLoaded", function() {
    const sectionsToAnimate = document.querySelectorAll(".animate-on-scroll");

    const observerOptions = {
        root: null, // viewport
        threshold: 0.5 // ο ρότος ορατότητας που χρειάζεται για να ενεργοποιήσει την παρατήρηση
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-on-load");
                observer.unobserve(entry.target); // σταματήστε να παρακολουθείτε αφού έχει ενεργοποιηθεί το animation
            }
        });
    }, observerOptions);

    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });
});
