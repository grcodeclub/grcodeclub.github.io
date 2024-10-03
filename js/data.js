// Λίστα με τους συνδέσμους προς τα αρχεία CSS
const cssLinks = [
    "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css", // Bootstrap πρώτα
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css", // Font Awesome δεύτερο
    "https://grcodeclub.github.io/website/css/grcodeclub/custom-bootstrap.css" // Custom Bootstrap τελευταίο
];
 
const head = document.head; // Αρχικοποίηση head
 
// Προσθήκη των αρχείων CSS στο head
cssLinks.forEach(linkUrl => {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = linkUrl;
    head.appendChild(linkElement); // Προσθήκη στο head
});

 
 
 /////////////////
 /// Εισαγωγή Logo
 /////////////////
 
 // Δημιουργία ενός πίνακα με τα μεγέθη που θέλετε να προσθέσετε
 const sizes = [
   { width: 32, height: 32, url: 'https://grcodeclub.github.io/files-page/logo/32x32.png' },
   { width: 48, height: 48, url: 'https://grcodeclub.github.io/files-page/logo/48x48.png' },
   { width: 96, height: 96, url: 'https://grcodeclub.github.io/files-page/logo/96x96.png' },
   { width: 144, height: 144, url: 'https://grcodeclub.github.io/files-page/logo/144x144.png' }
 ];
 
 // Προσθήκη των favicons για κάθε μέγεθος
 sizes.forEach(({ width, height, url }) => {
   // Δημιουργία νέου στοιχείου <link>
   const faviconLink = document.createElement('link');
   faviconLink.rel = 'icon';
   faviconLink.type = 'image/png';
   faviconLink.href = url;
   faviconLink.sizes = `${width}x${height}`;
   // Προσθήκη του στοιχείου <link> στο <head> του εγγράφου
   document.head.appendChild(faviconLink);
 });
 
// Δημιουργία στοιχείου <link> για το favicon .ico
const icoFaviconLink = document.createElement('link');
icoFaviconLink.rel = 'shortcut icon';
icoFaviconLink.type = 'image/x-icon';
icoFaviconLink.href = 'https://grcodeclub.github.io/files-page/logo/favicon.ico';
document.head.appendChild(icoFaviconLink);    // Προσθήκη του στοιχείου <link> στο <head> του εγγράφου
 
///////////////////////////////
// Θέτουμε το title της σελίδας
///////////////////////////////
document.title = 'GrCode Club'; 
const metaElement = document.createElement('meta');     // Δημιουργία ενός νέου στοιχείου <meta>
 
///////////
// ViewPort
///////////
 
metaElement.setAttribute('name', 'viewport');     // Ορίζουμε την ιδιότητα 'name' ως 'viewport'
metaElement.setAttribute('content', 'width=device-width, initial-scale=0.8');     // Ορίζουμε την ιδιότητα 'content' με την τιμή που θέλουμε
document.head.appendChild(metaElement);     // Προσθέτουμε το στοιχείο <meta> στο <head> του HTML εγγράφου

document.addEventListener('contextmenu', event => event.preventDefault());      // Απενεργοποίηση του μενού περιβάλλοντος 
document.addEventListener('keydown', function(event) { // Αποτροπή των συντομεύσεων
    if ((event.ctrlKey && 
        (event.key === 'u' || event.key === 's' || event.key === 'p' || event.key === 'θ' || event.key === 'σ' || event.key === 'π' )) || 
        (event.key === 'F12') || (event.key === 'F11')) {
            event.preventDefault();
            console.log(event.key);
            alert('This keyboard shortcut is disabled on this page.');
    }
});

function addScriptHead(src) {
    var script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
}

// Φορτώστε πρώτα jQuery
addScriptHead('https://code.jquery.com/jquery-3.5.1.min.js'); // Αντικαταστήστε το slim.min.js με το min.js

// Φορτώστε άλλα scripts
addScriptHead('https://grcodeclub.gr/js/prism.js');
addScriptHead('https://grcodeclub.gr/js/cookies.js');


document.addEventListener('DOMContentLoaded', function() {
    
    function addScript(src) {
        var script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
    }
    
    addScript('https://grcodeclub.gr/js/add/social.js');
    addScript('https://grcodeclub.gr/js/shareURL.js');
    addScript('https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js'); // Popper.js
addScript('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'); // Bootstrap
    
    if (document.getElementById('addHead')) { addScript('https://grcodeclub.gr/js/add/head.js'); }
    if (document.getElementById('add_headder')) { addScript('https://grcodeclub.gr/js/add/headder.js');}

    if (document.getElementById('selectOption') && document.getElementById('search_table_page')) { addScript('https://grcodeclub.gr/js/search/tableSearchWithSelect.js');}
    if (document.getElementById('search_table_page') && !document.getElementById('selectOption')) { addScript('https://grcodeclub.gr/js/search/tables-pages.js');}
    if (document.getElementById('table_page')) { addScript('https://grcodeclub.gr/js/tables/pages.js');}
    if (document.getElementById('code1')) {addScript('https://grcodeclub.gr/js/action/show_more_codes.js');} 
        else if (document.getElementById('code')) { addScript('https://grcodeclub.gr/js/action/show_code.js');}
    if (document.getElementById('search_table_page_3')) { addScript('https://grcodeclub.gr/js/search/tables-pages-3-input.js'); }
    if (document.getElementById('dropcard')) { addScript('https://grcodeclub.github.io/js/action/dropdown-cards.js'); }
    if (document.querySelector('.mytable') !== null) { addScript('https://grcodeclub.gr/js/tables/color.js'); }
    if (document.getElementById('back_page')) { addScript('https://grcodeclub.gr/js/add/back_page.js'); }

    
});
