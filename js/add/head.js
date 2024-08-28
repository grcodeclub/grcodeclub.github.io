// Λίστα με τους συνδέσμους προς τα αρχεία CSS
const cssLinks = [
    "https://grcodeclub.gr/web/css/grcodeclub/header_and_footer.css",
    "https://grcodeclub.gr/web/css/grcodeclub/main.css",
    "https://grcodeclub.gr/web/css/grcodeclub/text.css",
    "https://grcodeclub.gr/web/css/grcodeclub/layout.css",
    "https://grcodeclub.gr/web/css/grcodeclub/code_bg.css",
    "https://grcodeclub.gr/web/css/grcodeclub/menu.css",
    "https://grcodeclub.gr/web/css/grcodeclub/share.css",
    "https://grcodeclub.gr/web/css/grcodeclub/button.css",
    "https://grcodeclub.gr/web/css/grcodeclub/card.css",
    "https://grcodeclub.gr/web/css/grcodeclub/cookies.css",
    "https://grcodeclub.gr/web/css/grcodeclub/img.css",
    "https://grcodeclub.gr/web/css/grcodeclub/prism.css",
    "https://grcodeclub.gr/web/css/grcodeclub/list.css",
    "https://grcodeclub.gr/web/css/grcodeclub/table.css",
    "https://grcodeclub.gr/web/css/grcodeclub/bg.css",
    "https://grcodeclub.gr/web/css/grcodeclub/social.css",
    "https://grcodeclub.gr/web/css/grcodeclub/scrollbars.css",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
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
 
// Αποτροπή των συντομεύσεων
document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey && 
        (event.key === 'u' || event.key === 's' || event.key === 'p' || event.key === 'θ' || event.key === 'σ' || event.key === 'π' )) || 
        (event.key === 'F12') || (event.key === 'F11')) {
            event.preventDefault();
            console.log(event.key);
            alert('This keyboard shortcut is disabled on this page.');
    }
});
 
 // Jquery
var var_jquery = document.createElement('script');
var_jquery.src = 'https://grcodeclub.gr/js/jquery.js';
document.head.appendChild(var_jquery); 
    
// Prism
var var_prism = document.createElement('script');
var_prism.src = 'https://grcodeclub.gr/js/prism.js';
document.head.appendChild(var_prism); 

var mycookies = document.createElement('script');
mycookies.src = 'https://grcodeclub.gr/js/cookies.js';
document.head.appendChild(mycookies);
 
    
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('search_table_page')) {        // Ελέγξτε αν υπάρχει το στοιχείο με id="search_table_page" στο body
        var search_tables_pages = document.createElement('script');
        search_tables_pages.src = 'https://grcodeclub.gr/js/search/tables-pages.js';
        document.head.appendChild(search_tables_pages);
    }
    if (document.getElementById('table_page')) {        // Ελέγξτε αν υπάρχει το στοιχείο με id="search_table_page" στο body
        var search_tables_pages = document.createElement('script');
        search_tables_pages.src = 'https://grcodeclub.gr/js/tables/pages.js';
        document.head.appendChild(search_tables_pages);
    }

    if (document.getElementById('code')) {        // Ελέγξτε αν υπάρχει το στοιχείο με id="code" στο body
        var show_codes = document.createElement('script');
        show_codes.src = 'https://grcodeclub.gr/js/action/show_more_codes.js';
        document.head.appendChild(show_codes);
    }
});

