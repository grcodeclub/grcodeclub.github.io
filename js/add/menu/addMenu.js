function addScript(src) {
        script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
    }

const currentURL = window.location.href;  // Λειτουργία για να ελέγξει το URL και να προσθέσει id στο body

// Κάνε αίτημα στο currentURL για να ελέγξεις την κατάσταση
fetch(currentURL)
    .then(response => {
        // Έλεγχος αν η κατάσταση είναι 200 (OK)
        if (response.ok) {
            // Αν είναι 200, προχωράμε στην εκτέλεση των scripts
            if (currentURL.startsWith('https://grcodeclub.gr/c/')) {addScript('https://grcodeclub.github.io/js/add/menu/programming/c.js');} 
            else if (currentURL.startsWith('https://grcodeclub.gr/python/')) {addScript('https://grcodeclub.github.io/js/add/menu/programming/python.js');}
            else if (currentURL.startsWith('https://grcodeclub.gr/cpp/')) {addScript('https://grcodeclub.github.io/js/add/menu/programming/cpp.js');}
            else if (currentURL.startsWith('https://grcodeclub.gr/php/')) {addScript('https://grcodeclub.github.io/js/add/menu/programming/php.js');}
            else if (currentURL.startsWith('https://grcodeclub.gr/java/')) {addScript('https://grcodeclub.github.io/js/add/menu/programming/java.js');} 
            
            else if (currentURL.startsWith('https://grcodeclub.gr/windows/')) {
                if (currentURL.startsWith('https://grcodeclub.gr/windows/command-line/')) {addScript('https://grcodeclub.github.io/js/add/menu/windows/command-line.js');}
                else {addScript('https://grcodeclub.github.io/js/add/menu/system/windows/main.js');}
            } 
            
            else if (currentURL.startsWith('https://grcodeclub.gr/orologia/') || currentURL.startsWith('https://grcodeclub.gr/network/orologia/') || 
                       currentURL.startsWith('https://grcodeclub.gr/programming/orologia/') ||currentURL.startsWith('https://grcodeclub.gr/system/orologia/') || 
                       currentURL.startsWith('https://grcodeclub.gr/linux/orologia/') || currentURL.startsWith('https://grcodeclub.gr/cybersecurity/orologia/')
                       || currentURL.startsWith('https://grcodeclub.gr/windows/orologia') ) {
                        addScript('https://grcodeclub.github.io/js/add/menu/orologia.js'); } 
            else if (currentURL.startsWith('https://grcodeclub.gr/network/protocol/ip/')) {addScript('https://grcodeclub.github.io/js/add/menu/network/ip.js');} 
            else if (currentURL.startsWith('https://grcodeclub.gr/linux/terminal/')) {addScript('https://grcodeclub.github.io/js/add/menu/system/linux/terminal.js');}
            else if (currentURL.startsWith('https://grcodeclub.gr/linux/')) { addScript('https://grcodeclub.github.io/js/add/menu/system/linux/menu.js');}
            else if (currentURL.startsWith('https://grcodeclub.gr/javascript/')) {addScript('https://grcodeclub.github.io/js/add/menu/programming/javascript.js');}
            else if (currentURL.startsWith('https://grcodeclub.gr/website/')) { 
                        if (currentURL.startsWith('https://grcodeclub.gr/website/html/')) {addScript('https://grcodeclub.github.io/js/add/menu/programming/html.js');}
                        else if (currentURL.startsWith('https://grcodeclub.gr/website/css/')) {addScript('https://grcodeclub.github.io/js/add/menu/programming/css.js');}
                        else if (currentURL.startsWith('https://grcodeclub.gr/website/nodejs/')) {addScript('https://grcodeclub.github.io/js/add/menu/programming/nodejs.js');}
                        else {addScript('https://grcodeclub.github.io/js/add/menu/website.js');}
            }
        }
        else {console.log("Η σελίδα δεν είναι διαθέσιμη. Κωδικός κατάστασης: " + response.status);}
    })
    .catch(error => {
        // Χειρισμός σφάλματος, π.χ., σε περίπτωση δικτύου
        console.error("Σφάλμα κατά την αίτηση:", error);
    });
