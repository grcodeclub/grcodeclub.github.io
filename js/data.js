// Λίστα με τους συνδέσμους προς τα αρχεία CSS
const cssLinks = [
    "https://grcodeclub.github.io/website/css/grcodeclub/custom-bootstrap.css", // Custom Bootstrap τελευταίο
    "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css", // Bootstrap πρώτα
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" // Font Awesome δεύτερο
];

const head = document.head; // Αρχικοποίηση head

// Προσθήκη των αρχείων CSS στο head
cssLinks.forEach(linkUrl => {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = linkUrl;
    head.appendChild(linkElement); // Προσθήκη στο head
});

// Εισαγωγή Logo
const sizes = [
    { width: 32, height: 32, url: 'https://grcodeclub.github.io/files-page/logo/32x32.png' },
    { width: 48, height: 48, url: 'https://grcodeclub.github.io/files-page/logo/48x48.png' },
    { width: 96, height: 96, url: 'https://grcodeclub.github.io/files-page/logo/96x96.png' },
    { width: 144, height: 144, url: 'https://grcodeclub.github.io/files-page/logo/144x144.png' }
];

// Προσθήκη favicons
sizes.forEach(({ width, height, url }) => {
    const faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    faviconLink.type = 'image/png';
    faviconLink.href = url;
    faviconLink.sizes = `${width}x${height}`;
    document.head.appendChild(faviconLink);
});

// Δημιουργία στοιχείου <link> για το favicon .ico
const icoFaviconLink = document.createElement('link');
icoFaviconLink.rel = 'shortcut icon';
icoFaviconLink.type = 'image/x-icon';
icoFaviconLink.href = 'https://grcodeclub.github.io/files-page/logo/favicon.ico';
document.head.appendChild(icoFaviconLink);

// Θέτουμε το title της σελίδας
document.title = 'GrCode Club';
const metaElement = document.createElement('meta'); // Δημιουργία ενός νέου στοιχείου <meta>

// ViewPort
metaElement.setAttribute('name', 'viewport');
metaElement.setAttribute('content', 'width=device-width, initial-scale=0.8');
document.head.appendChild(metaElement); // Προσθέτουμε το στοιχείο <meta> στο <head> του εγγράφου

// Απενεργοποίηση του μενού περιβάλλοντος
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey && 
        (event.key === 'u' || event.key === 's' || event.key === 'p' || event.key === 'θ' || event.key === 'σ' || event.key === 'π')) || 
        (event.key === 'F12') || (event.key === 'F11')) {
            event.preventDefault();
            console.log(event.key);
            alert('This keyboard shortcut is disabled on this page.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    
// Φορτώστε τα scripts
        function addScript(src) {
            var script = document.createElement('script');
            script.src = src;
            document.body.appendChild(script);
    }

// Φορτώστε πρώτα jQuery
    addScript('https://code.jquery.com/jquery-3.5.1.min.js'); // Αντικαταστήστε το slim.min.js με το min.js
    addScript('https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js'); // Popper.js
    addScript('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'); // Bootstrap
    addScript('https://grcodeclub.gr/js/prism.js');
    addScript('https://grcodeclub.gr/js/cookies.js');
    addScript('https://grcodeclub.gr/js/add/head.js');
    addScript('https://grcodeclub.gr/js/add/social.js');
    addScript('https://grcodeclub.gr/js/shareURL.js');

    // Πρόσθετες συνθήκες φόρτωσης
    if (document.getElementById('selectOption') && document.getElementById('search_table_page')) {
        addScript('https://grcodeclub.gr/js/search/tableSearchWithSelect.js');
    }
    if (document.getElementById('search_table_page') && !document.getElementById('selectOption')) {
        addScript('https://grcodeclub.gr/js/search/tables-pages.js');
    }
    if (document.getElementById('table_page')) {
        addScript('https://grcodeclub.gr/js/tables/pages.js');
    }
    if (document.getElementById('code1')) {
        addScript('https://grcodeclub.gr/js/action/show_more_codes.js');
    } else if (document.getElementById('code')) {
        addScript('https://grcodeclub.gr/js/action/show_code.js');
    }
    if (document.getElementById('search_table_page_3')) {
        addScript('https://grcodeclub.gr/js/search/tables-pages-3-input.js');
    }
    if (document.getElementById('dropcard')) {
        addScript('https://grcodeclub.github.io/js/action/dropdown-cards.js');
    }
    if (document.querySelector('.mytable') !== null) {
        addScript('https://grcodeclub.gr/js/tables/color.js');
    }
    if (document.getElementById('back_page')) {
        addScript('https://grcodeclub.gr/js/add/back_page.js');
    }
});
