// Δημιουργούμε μια μεταβλητή για το πραγματικό URL
let originalUrl;

// Όταν φορτώνει το DOM
document.addEventListener("DOMContentLoaded", function() {
    // Παίρνουμε το τρέχον URL
    const currentUrl = window.location.href;

    // Αποθηκεύουμε το αρχικό URL
    originalUrl = currentUrl;

    // Δημιουργούμε ένα URL αντικείμενο για εύκολο χειρισμό των τμημάτων του URL
    const url = new URL(currentUrl);

    // Παίρνουμε το πρώτο path segment
    const firstPath = url.pathname.split('/')[1];

    // Δημιουργούμε το νέο URL που θέλουμε να εμφανίζεται
    const newUrl = `${url.origin}/${firstPath}/`;

    // Αλλάζουμε το URL που φαίνεται στον χρήστη χωρίς να αλλάξουμε το περιεχόμενο
    history.pushState({}, '', newUrl);
});

// Συνάρτηση για την αντιγραφή του πραγματικού URL
function copyRealUrl() {
    // Χρησιμοποιούμε το Clipboard API για να αντιγράψουμε το αρχικό URL
    navigator.clipboard.writeText(originalUrl).then(function() {
        // Επιτυχής αντιγραφή
        console.log('URL copied to clipboard: ' + originalUrl);
    }).catch(function(error) {
        // Εμφανίζουμε μήνυμα σφάλματος αν κάτι πάει στραβά
        console.error('Failed to copy URL: ', error);
    });
}
