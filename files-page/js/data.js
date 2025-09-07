// Λίστα με τους συνδέσμους προς τα αρχεία CSS
const cssLinks = [
    "https://grcodeclub.github.io/files-page/css/libraries/bootstrap/v5-3-3.css",
    "https://grcodeclub.github.io/files-page/css/libraries/bootstrap/custom.css",
    "https://grcodeclub.github.io/files-page/css/libraries/font-awesome/6-5-0.css",
    "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap",
    "https://grcodeclub.github.io/files-page/css/code/bg.css",
    "https://grcodeclub.github.io/files-page/css/text.css",
    "https://grcodeclub.github.io/files-page/css/elements.css"
]; 

const head = document.head;    // Αρχικοποίηση head
function addCssFiles(cssUrls) {
     const linkElement = document.createElement('link');
     linkElement.rel = 'stylesheet';
     linkElement.href = cssUrls;
     head.appendChild(linkElement);  // Προσθήκη στο head
}

 // Προσθήκη των αρχείων CSS στο head
 cssLinks.forEach(linkUrl => {addCssFiles(linkUrl); });

// Εισαγωγή Logo 
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
 
// Θέτουμε το title της σελίδας
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
 
// ViewPort
metaElement.setAttribute('name', 'viewport');     // Ορίζουμε την ιδιότητα 'name' ως 'viewport'
metaElement.setAttribute('content', 'width=device-width, initial-scale=0.8');     // Ορίζουμε την ιδιότητα 'content' με την τιμή που θέλουμε
document.head.appendChild(metaElement);     // Προσθέτουμε το στοιχείο <meta> στο <head> του HTML εγγράφου

document.addEventListener('DOMContentLoaded', function() {  


    
  function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(`Loaded: ${src}`);
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.body.appendChild(script);
    });
}

// Αλυσίδα Promises
loadScript('https://grcodeclub.github.io/files-page/js/libraries/jquery.js')
    .then(() => loadScript('https://grcodeclub.github.io/files-page/js/libraries/popper-v2-5-2.js'))
    .then(() => loadScript('https://grcodeclub.github.io/files-page/js/libraries/bootstrap@5-3-3.js'))    
    .then(() => loadScript('https://grcodeclub.github.io/files-page/js/libraries/select2-4-0-13.js'))
    .then(() => loadScript('https://grcodeclub.github.io/files-page/js/add/body.js'))
    .catch(error => console.error(error));


    function addScript(src) {
        var script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
    }

    if (document.querySelector('.command-line') || document.querySelector('.code_editor')) { 
        addCssFiles("https://grcodeclub.github.io/files-page/css/code/prism.css");
        addScript('https://grcodeclub.github.io/files-page/js/libraries/prism.js');
    }
    
    if (document.getElementById('selectOption') && document.getElementById('search_table_page')) { addScript('https://grcodeclub.github.io/files-page/js/search/tableSearchWithSelect.js');}
    if (document.getElementById('search_table_page') && document.getElementById('searchInput') && !document.getElementById('selectOption')) { addScript('https://grcodeclub.github.io/files-page/js/search/Table_Pagination_Search.js');}
    if (document.getElementById('search_table_page') && document.getElementById('searchInput2') && !document.getElementById('selectOption')) { addScript('https://grcodeclub.github.io/files-page/js/search/Table_Pagination_2_Search.js');}

    const currentURL = window.location.href;  // Λειτουργία για να ελέγξει το URL και να προσθέσει id στο body

    const scriptMappings = {
    'https://grcodeclub.gr/developer/languages/python/': 'https://grcodeclub.github.io/files-page/js/add/menu/developer/languages/python.js',
    'https://grcodeclub.gr/developer/languages/cpp/': 'https://grcodeclub.github.io/files-page/js/add/menu/developer/languages/cpp.js',
    'https://grcodeclub.gr/developer/languages/java/': 'https://grcodeclub.github.io/files-page/js/add/menu/developer/languages/java.js',
    'https://grcodeclub.gr/web-developer/javascript/': 'https://grcodeclub.github.io/files-page/js/add/menu/developer/web/javascript.js',
    'https://grcodeclub.gr/web-developer/html/': 'https://grcodeclub.github.io/files-page/js/add/menu/developer/web/html.js',
    'https://grcodeclub.gr/web-developer/css/': 'https://grcodeclub.github.io/files-page/js/add/menu/developer/web/css.js',
    'https://grcodeclub.gr/web-developer/nodejs/': 'https://grcodeclub.github.io/files-page/js/add/menu/developer/web/nodejs.js',
    'https://grcodeclub.gr/web-developer/cms/wordpress': 'https://grcodeclub.github.io/files-page/js/add/menu/developer/web/cms/wordpress.js',
    'https://grcodeclub.gr/web-developer/build/': 'https://grcodeclub.github.io/files-page/js/add/menu/website.js',
    'https://grcodeclub.gr/operating-systems/microsoft-windows/command-line/': 'https://grcodeclub.gr/files-page/js/add/menu/system/windows/command-line.js',
    'https://grcodeclub.gr/operating-systems/microsoft-windows/': 'https://grcodeclub.github.io/files-page/js/add/menu/system/windows/main.js',
    'https://grcodeclub.gr/operating-systems/linux/terminal/': 'https://grcodeclub.github.io/files-page/js/add/menu/system/linux/terminal.js',
    'https://grcodeclub.gr/operating-systems/linux/': 'https://grcodeclub.github.io/files-page/js/add/menu/system/linux/menu.js',
    'https://grcodeclub.gr/operating-systems/': 'https://grcodeclub.github.io/files-page/js/add/menu/system.js',
    'https://grcodeclub.gr/more/office-suite': 'https://grcodeclub.github.io/files-page/js/add/menu/more/office-suite.js',
    'https://grcodeclub.gr/syntomografies/': 'https://grcodeclub.github.io/files-page/js/add/menu/syntomografies.js',
    'https://grcodeclub.gr/orologia/': 'https://grcodeclub.github.io/files-page/js/add/menu/orologia.js'
};

const handleScriptAddition = () => {
    const matchingScript = Object.keys(scriptMappings).find(url => currentURL.startsWith(url)); // Ελέγχει ποιο URL από τα κλειδιά του αντικειμένου `scriptMappings` ταιριάζει με το `currentURL`
    if (matchingScript) { addScript(scriptMappings[matchingScript]); addCssFiles("https://grcodeclub.github.io/files-page/css/libraries/select2/v4-0-13.css"); addCssFiles("https://grcodeclub.github.io/files-page/css/libraries/select2/custom.css"); }
};

// Έλεγχος αν η σελίδα είναι διαθέσιμη
fetch(currentURL)
    .then(response => {
        if (response.ok) {handleScriptAddition();} 
        else {console.log("Η σελίδα δεν είναι διαθέσιμη. Κωδικός κατάστασης: " + response.status);}
    })
    .catch(error => {    console.error("Σφάλμα κατά την αίτηση:", error);    });


});