    function addScript(src) {
        var script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
    }

const currentURL = window.location.href;  // Λειτουργία για να ελέγξει το URL και να προσθέσει id στο body

const currentURL = window.location.href; // Παράδειγμα τρέχοντος URL

// Κάνε αίτημα στο currentURL για να ελέγξεις την κατάσταση
fetch(currentURL)
    .then(response => {
        // Έλεγχος αν η κατάσταση είναι 200 (OK)
        if (response.ok) {
            // Αν είναι 200, προχωράμε στην εκτέλεση των scripts
            if (currentURL.startsWith('https://grcodeclub.gr/c/')) {addScript('https://grcodeclub.github.io/js/add/menu/programming/c.js');} 
            else if (currentURL.startsWith('https://grcodeclub.gr/python/')) {addScript('https://grcodeclub.github.io/js/add/menu/programming/python.js');} 
            else if (currentURL.startsWith('https://grcodeclub.gr/orologia/') || currentURL.startsWith('https://grcodeclub.gr/network/orologia/') || 
                       currentURL.startsWith('https://grcodeclub.gr/programming/orologia/') ||currentURL.startsWith('https://grcodeclub.gr/system/orologia/') || 
                       currentURL.startsWith('https://grcodeclub.gr/linux/orologia/') || currentURL.startsWith('https://grcodeclub.gr/cybersecurity/orologia/')) {
                        addScript('https://grcodeclub.github.io/js/add/menu/orologia.js'); } 
            else if (currentURL.startsWith('https://grcodeclub.gr/network/protocol/ip/')) {addScript('https://grcodeclub.github.io/js/add/menu/network/ip.js');} 
            else if (currentURL.startsWith('https://grcodeclub.gr/linux/')) { addScript('https://grcodeclub.github.io/js/add/menu/system/linux.js');}
        }
        else {console.log("Η σελίδα δεν είναι διαθέσιμη. Κωδικός κατάστασης: " + response.status);}
    })
    .catch(error => {
        // Χειρισμός σφάλματος, π.χ., σε περίπτωση δικτύου
        console.error("Σφάλμα κατά την αίτηση:", error);
    });
