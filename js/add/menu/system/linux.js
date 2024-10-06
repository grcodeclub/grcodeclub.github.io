// Ο κώδικας παραμένει ο ίδιος για την προσθήκη του dropdown
// Το HTML περιεχόμενο Select
var mymenu = `
<div class="dropdown-container contentsMenu">
    <label for="page-select" class="form-label">Περιεχόμενα :</label>
<select id="page-select" class="form-select" onchange="redirectToPage()">
    <option value="https://grcodeclub.gr/linux/">Linux</option>
    <option value="https://grcodeclub.gr/linux/linux-directory-structure">Δομή Καταλόγων Linux</option>
    <option value="https://grcodeclub.gr/linux/terminal/">Terminal</option>
</select>
</div>
`;

const currentUrl = window.location.href;  


// Εύρεση του στοιχείου με το id 'addHeader'
const addHeader = document.getElementById('addHeader');
// Εύρεση του επόμενου στοιχείου (next sibling) μετά το 'addHeader'
const nextDiv = addHeader.nextElementSibling;
// Προσθήκη του HTML περιεχομένου στην αρχή του επόμενου div
if (nextDiv) { nextDiv.insertAdjacentHTML('afterbegin', mymenu); }

// Συνάρτηση για την ανακατεύθυνση στη σελίδα ανάλογα με την επιλογή
function redirectToPage() {
    var select = document.getElementById('page-select');
    var selectedValue = select.value; // Παίρνουμε την τιμή του επιλεγμένου option
    if (selectedValue) { window.location.href = selectedValue; }// Ανακατεύθυνση στην επιλεγμένη σελίδα
}

console.log("URL:"); // Αν δεν ισχύει, εκτύπωση του τρέχοντος URL
console.log("URL:", currentURL); // Αν δεν ισχύει, εκτύπωση του τρέχοντος URL
if (currentURL.startsWith('https://grcodeclub.gr/linux/terminal/')) {
     console.log("Terminal Menu");
     const termmymenu = `
        <div class="dropdown-container contentsMenu">
            <label for="termianal-select" class="form-label">Εντολες :</label>
            <select id="termianal-select" class="form-select" onchange="redirectToPage()">
                <option value="https://grcodeclub.gr/linux/">Linux</option>
                <option value="https://grcodeclub.gr/linux/linux-directory-structure">Δομή Καταλόγων Linux</option>
                <option value="https://grcodeclub.gr/linux/terminal/">Terminal</option>
            </select>
        </div>`;

    const linuxmenu = document.getElementById('linux-menu'); // Ελέγξτε ότι το 'linux-menu' υπάρχει
    if (linuxmenu) {
        linuxmenu.innerHTML = termmymenu; // Προσθέτει το dropdown στο DOM
    }
}


window.onload = function() {
    const select = document.getElementById('page-select');
    // Έλεγχος για να βρούμε το κατάλληλο option
    for (var option of select.options) {
        if (option.value === currentUrl) {
            select.value = option.value; // Ρύθμιση του επιλεγμένου option
            break;
        }
    }
    if (linuxmenu) {
    $('#termianal-select').select2(); // Εφαρμογή του Select2 αμέσως μετά την προσθήκη του HTML
    }
  $(document).ready(function() { $('#page-select').select2();    }); // Εφαρμογή του Select2
};
