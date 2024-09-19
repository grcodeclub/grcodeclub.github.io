function copyRealUrl() {
    // Ελέγχουμε αν το Web Share API είναι διαθέσιμο
    if (navigator.share) {
        navigator.share({
            title: document.title, // Ο τίτλος της σελίδας
            text: 'Δείτε αυτήν την σελίδα:',
            url: window.location.href // Το URL της τρέχουσας σελίδας
        })
        .then(() => console.log('Η σελίδα μοιράστηκε επιτυχώς'))
        .catch((error) => console.log('Σφάλμα κατά την κοινή χρήση:', error));
    } else {
        // Αν δεν υποστηρίζεται το Web Share API, μπορούμε να αντιγράψουμε το URL στο clipboard ως εναλλακτική
        navigator.clipboard.writeText(window.location.href)
            .then(() => alert('Το URL αντιγράφηκε στο πρόχειρο'))
            .catch((error) => console.log('Σφάλμα κατά την αντιγραφή:', error));
    }
}
