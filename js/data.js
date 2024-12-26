// Λίστα με τους συνδέσμους προς τα αρχεία CSS
const cssLinks = [
    "https://grcodeclub.gr/css/libraries/bootstrap/v5-3-3.css",
    "https://grcodeclub.gr/css/libraries/bootstrap/custom.css",
    "https://grcodeclub.gr/css/libraries/font-awesome/6-5-0.css",
    "https://grcodeclub.gr/css/code/bg.css",
    "https://grcodeclub.gr/css/text.css",
    "https://grcodeclub.gr/css/elements.css"
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
icoFaviconLink.href = 'https://grcodeclub.gr/files-page/logo/favicon.ico';
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

document.addEventListener('contextmenu', event => event.preventDefault());      // Απενεργοποίηση του μενού περιβάλλοντος 
document.addEventListener('keydown', function(event) { // Αποτροπή των συντομεύσεων
    if ((event.ctrlKey && 
         (event.key === 'u' || event.key === 's' || event.key === 'p' || event.key === 'θ' || event.key === 'σ' || event.key === 'π' )) || 
         (event.key === 'F12') || (event.key === 'F11')) {event.preventDefault(); alert('This keyboard shortcut is disabled on this page.');}
});

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
loadScript('https://grcodeclub.gr/js/libraries/jquery.js')
    .then(() => loadScript('https://grcodeclub.gr/js/libraries/popper-v2-5-2.js'))
    .then(() => loadScript('https://grcodeclub.gr/js/libraries/bootstrap@5-3-3.js'))    
    .then(() => loadScript('https://grcodeclub.gr/js/libraries/select2-4-0-13.js'))
    .then(() => loadScript('https://grcodeclub.gr/js/add/body.js'))
    .catch(error => console.error(error));


    function addScript(src) {
        var script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
    }

    if (document.querySelector('.command-line') || document.querySelector('.code_editor') || document.getElementById('code')) { 
        addCssFiles("https://grcodeclub.gr/css/code/prism.css");
        addScript('https://grcodeclub.gr/js/libraries/prism.js');
        addScript('https://grcodeclub.gr/js/action/show_code.js');
    }
    
    if (document.getElementById('selectOption') && document.getElementById('search_table_page')) { addScript('https://grcodeclub.gr/js/search/tableSearchWithSelect.js');}
    if (document.getElementById('search_table_page') && !document.getElementById('selectOption')) { addScript('https://grcodeclub.gr/js/search/tables-pages.js');}

    const currentURL = window.location.href;  // Λειτουργία για να ελέγξει το URL και να προσθέσει id στο body

    const scriptMappings = {
    'https://grcodeclub.gr/c/': 'https://grcodeclub.github.io/js/add/menu/programming/c.js',
    'https://grcodeclub.gr/python/': 'https://grcodeclub.github.io/js/add/menu/programming/python.js',
    'https://grcodeclub.gr/cpp/': 'https://grcodeclub.github.io/js/add/menu/programming/cpp.js',
    'https://grcodeclub.gr/php/': 'https://grcodeclub.github.io/js/add/menu/programming/php.js',
    'https://grcodeclub.gr/java/': 'https://grcodeclub.github.io/js/add/menu/programming/java.js',
    'https://grcodeclub.gr/windows/command-line/': 'https://grcodeclub.gr/js/add/menu/system/windows/command-line.js',
    'https://grcodeclub.gr/windows/': 'https://grcodeclub.github.io/js/add/menu/system/windows/main.js',
    'https://grcodeclub.gr/mobile/': 'https://grcodeclub.github.io/js/add/menu/mobile.js',
    'https://grcodeclub.gr/syntomografies/': 'https://grcodeclub.github.io/js/add/menu/syntomografies.js',
    'https://grcodeclub.gr/orologia/': 'https://grcodeclub.github.io/js/add/menu/orologia.js',
    'https://grcodeclub.gr/hardware/': 'https://grcodeclub.github.io/js/add/menu/hardware.js',
    'https://grcodeclub.gr/network/protocol/address-network/ip/': 'https://grcodeclub.github.io/js/add/menu/network/ip.js',
    'https://grcodeclub.gr/network/tcp-ip/': 'https://grcodeclub.github.io/js/add/menu/network/tcp-ip.js',
    'https://grcodeclub.gr/linux/terminal/': 'https://grcodeclub.github.io/js/add/menu/system/linux/terminal.js',
    'https://grcodeclub.gr/linux/': 'https://grcodeclub.github.io/js/add/menu/system/linux/menu.js',
    'https://grcodeclub.gr/javascript/': 'https://grcodeclub.github.io/js/add/menu/programming/javascript.js',
    'https://grcodeclub.gr/website/html/': 'https://grcodeclub.github.io/js/add/menu/programming/html.js',
    'https://grcodeclub.gr/website/css/': 'https://grcodeclub.github.io/js/add/menu/programming/css.js',
    'https://grcodeclub.gr/website/nodejs/': 'https://grcodeclub.github.io/js/add/menu/programming/nodejs.js',
    'https://grcodeclub.gr/website/': 'https://grcodeclub.github.io/js/add/menu/website.js',
    'https://grcodeclub.gr/more/office-suite': 'https://grcodeclub.github.io/js/add/menu/more/office-suite.js',
    'https://grcodeclub.gr/more/create': 'https://grcodeclub.github.io/js/add/menu/more/create.js',
    'https://grcodeclub.gr/more/create/post': 'https://grcodeclub.github.io/js/add/menu/more/create.js', // Εξαιρείται εάν περιλαμβάνει 'post'
};

const handleScriptAddition = () => {
    const matchingScript = Object.keys(scriptMappings).find(url => currentURL.startsWith(url)); // Ελέγχει ποιο URL από τα κλειδιά του αντικειμένου `scriptMappings` ταιριάζει με το `currentURL`
    if (matchingScript) { addScript(scriptMappings[matchingScript]); addCssFiles("https://grcodeclub.gr/css/libraries/select2/v4-0-13.css"); addCssFiles("https://grcodeclub.gr/css/libraries/select2/custom.css"); }
};

// Έλεγχος αν η σελίδα είναι διαθέσιμη
fetch(currentURL)
    .then(response => {
        if (response.ok) {handleScriptAddition();} 
        else {console.log("Η σελίδα δεν είναι διαθέσιμη. Κωδικός κατάστασης: " + response.status);}
    })
    .catch(error => {    console.error("Σφάλμα κατά την αίτηση:", error);    });


});
