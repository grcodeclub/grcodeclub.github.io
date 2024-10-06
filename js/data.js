// Λίστα με τους συνδέσμους προς τα αρχεία CSS
const cssLinks = [
    "https://grcodeclub.gr/css/bootstrap/v5-3-3.css",
    "https://grcodeclub.gr/css/bootstrap/bootstrap-icons.css",
    "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css",
    "https://grcodeclub.gr/css/select2.css",
    "https://grcodeclub.gr/css/bootstrap/table.css",
    "https://grcodeclub.gr/css/bootstrap/custom.css",
    "https://grcodeclub.gr/css/scrollbars.css",
    "https://grcodeclub.gr/css/cookies.css",
    "https://grcodeclub.gr/css/manual.css",
    "https://grcodeclub.gr/css/text.css",
    "https://grcodeclub.gr/css/code_bg.css",
    "https://grcodeclub.gr/css/prism.css",
    "https://grcodeclub.gr/css/img.css",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
 ];
 
 const head = document.head;     // Αρχικοποίηση head
 
 // Προσθήκη των αρχείων CSS στο head
 cssLinks.forEach(linkUrl => {
     const linkElement = document.createElement('link');
     linkElement.rel = 'stylesheet';
     linkElement.href = linkUrl;
     head.appendChild(linkElement);  // Προσθήκη στο head
 });
 
 
 /////////////////
 /// Εισαγωγή Logo
 /////////////////
 
 // Δημιουργία ενός πίνακα με τα μεγέθη που θέλετε να προσθέσετε
 const sizes = [
   { width: 32, height: 32, url: 'https://grcodeclub.github.io/css/logo/32x32.png' },
   { width: 48, height: 48, url: 'https://grcodeclub.github.io/css/logo/48x48.png' },
   { width: 96, height: 96, url: 'https://grcodeclub.github.io/css/logo/96x96.png' },
   { width: 144, height: 144, url: 'https://grcodeclub.github.io/css/logo/144x144.png' }
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
icoFaviconLink.href = 'https://grcodeclub.github.io/css/logo/favicon.ico';
document.head.appendChild(icoFaviconLink);    // Προσθήκη του στοιχείου <link> στο <head> του εγγράφου
 
///////////////////////////////
// Θέτουμε το title της σελίδας
///////////////////////////////
document.title = 'GrCode Club'; 
const metaElement = document.createElement('meta');     // Δημιουργία ενός νέου στοιχείου <meta>



// Δημιουργία του meta tag για Cache-Control
var metaCacheControl = document.createElement('meta');
metaCacheControl.setAttribute('http-equiv', 'Cache-Control');
metaCacheControl.setAttribute('content', 'no-cache, no-store, must-revalidate');

// Δημιουργία του meta tag για Expires
var metaExpires = document.createElement('meta');
metaExpires.setAttribute('http-equiv', 'Expires');
metaExpires.setAttribute('content', '0');

// Προσθήκη των meta tags στο head της σελίδας
document.head.appendChild(metaCacheControl);
document.head.appendChild(metaExpires);



 
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

document.addEventListener('DOMContentLoaded', function() {    
   // Συνάρτηση για να προσθέσεις ένα script στο head και να περιμένεις μέχρι να φορτωθεί
    function addScriptBody(src, callback) {
        var script = document.createElement('script');
        script.src = src;
        script.onload = callback; // Κλήση της callback συνάρτησης όταν το script φορτωθεί
        document.body.appendChild(script);
    }
    // Χρήση της addScriptBody για να φορτώσεις το jQuery
    addScriptBody('https://grcodeclub.gr/js/jquery.js', function() {
        addScriptBody('https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js', function() {
            addScriptBody('https://grcodeclub.gr/js/bootstrap@5.3.3.js', function() {
                addScriptBody('https://grcodeclub.gr/js/prism.js');
                addScriptBody('https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js');
                addScriptBody('https://grcodeclub.gr/js/cookies.js');
                addScriptBody('https://grcodeclub.gr/js/add/body.js'); 
                addScriptBody('https://grcodeclub.gr/js/shareURL.js');
                addScriptBody('https://grcodeclub.gr/js/add/function-jQuery.js');
            });
        });
    });

    function addScript(src) {
        var script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
    }

    if (document.getElementById('selectOption') && document.getElementById('search_table_page')) { addScript('https://grcodeclub.gr/js/search/tableSearchWithSelect.js');}
    if (document.getElementById('search_table_page') && !document.getElementById('selectOption')) { addScript('https://grcodeclub.gr/js/search/tables-pages.js');}
    if (document.getElementById('table_page')) { addScript('https://grcodeclub.gr/js/tables/pages.js');}
    if (document.getElementById('code1')) {addScript('https://grcodeclub.gr/js/action/show_more_codes.js');} 
        else if (document.getElementById('code')) { addScript('https://grcodeclub.gr/js/action/show_code.js');}
    if (document.getElementById('search_table_page_3')) { addScript('https://grcodeclub.gr/js/search/tables-pages-3-input.js'); }
    if (document.getElementById('dropcard')) { addScript('https://grcodeclub.github.io/js/action/dropdown-cards.js'); }
    if (document.querySelector('.mytable') !== null) { addScript('https://grcodeclub.gr/js/tables/color.js'); }
    if (document.getElementById('back_page')) { addScript('https://grcodeclub.gr/js/add/back_page.js'); }

    const currentURL = window.location.href;  // Λειτουργία για να ελέγξει το URL και να προσθέσει id στο body
    if (currentURL.startsWith('https://grcodeclub.gr/c/')){addScriptBody('https://grcodeclub.github.io/js/add/menu/programming/c.js');}
    else if (currentURL.startsWith('https://grcodeclub.gr/python/')){addScriptBody('https://grcodeclub.github.io/js/add/menu/programming/python.js');}
    else if (currentURL.startsWith('https://grcodeclub.gr/orologia/') || currentURL.startsWith('https://grcodeclub.gr/network/orologia/')  || currentURL.startsWith('https://grcodeclub.gr/programming/orologia/')
             || currentURL.startsWith('https://grcodeclub.gr/system/orologia/')  || currentURL.startsWith('https://grcodeclub.gr/linux/orologia/') || currentURL.startsWith('https://grcodeclub.gr/cybersecurity/orologia/'))
        {addScriptBody('https://grcodeclub.github.io/js/add/menu/orologia.js');}
    else if (currentURL.startsWith('https://grcodeclub.gr/network/protocol/ip/')){addScriptBody('https://grcodeclub.github.io/js/add/menu/network/ip.js');}
});
