    document.addEventListener("DOMContentLoaded", function() {
        // Παίρνουμε το τρέχον URL
        const currentUrl = window.location.href;
        
        // Δημιουργούμε ένα URL αντικείμενο για εύκολο χειρισμό των τμημάτων του URL
        const url = new URL(currentUrl);

        // Παίρνουμε το πρώτο path segment
        const firstPath = url.pathname.split('/')[1];

        // Δημιουργούμε το νέο URL που θέλουμε να εμφανίζεται
        const newUrl = `${url.origin}/${firstPath}/`;

        // Αλλάζουμε το URL που φαίνεται στον χρήστη χωρίς να αλλάξουμε το περιεχόμενο
        history.pushState({}, '', newUrl);
    });
