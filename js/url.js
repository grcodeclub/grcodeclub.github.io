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

        // Συνάρτηση για την αντιγραφή του πραγματικού URL
        function copyRealUrl() {
            // Παίρνουμε το πραγματικό URL
            const realUrl = window.location.href;

            // Χρησιμοποιούμε το Clipboard API για να αντιγράψουμε το URL
            navigator.clipboard.writeText(realUrl).then(function() {
                // Επιτυχής αντιγραφή
                console.log('URL copied to clipboard: ' + realUrl);
            }).catch(function(error) {
                // Εμφανίζουμε μήνυμα σφάλματος αν κάτι πάει στραβά
                console.error('Failed to copy URL: ', error);
            });
        }
