// Ο κώδικας παραμένει ο ίδιος για την προσθήκη του dropdown
// Το HTML περιεχόμενο Select
let mymenu = `
<div class="dropdown-container contentsMenu">
    <label for="page-select" class="form-label">Περιεχόμενα :</label>
<select id="page-select" class="form-select" onchange="redirectToPage()">
    <option value="https://grcodeclub.gr/linux/">Linux</option>
    <option value="https://grcodeclub.gr/linux/linux-directory-structure">Δομή Καταλόγων Linux</option>
    <option value="https://grcodeclub.gr/linux/terminal/">Terminal</option>
</select>
</div>
`;

// Εύρεση του στοιχείου με το id 'addHeader'
let addHeader = document.getElementById('addHeader');
// Εύρεση του επόμενου στοιχείου (next sibling) μετά το 'addHeader'
let nextDiv = addHeader.nextElementSibling;
// Προσθήκη του HTML περιεχομένου στην αρχή του επόμενου div
if (nextDiv) { nextDiv.insertAdjacentHTML('afterbegin', mymenu); }

// Συνάρτηση για την ανακατεύθυνση στη σελίδα ανάλογα με την επιλογή
function redirectToPage() {
    let select = document.getElementById('page-select');
    let selectedValue = select.value; // Παίρνουμε την τιμή του επιλεγμένου option
    if (selectedValue) { window.location.href = selectedValue; }// Ανακατεύθυνση στην επιλεγμένη σελίδα
}

window.onload = function() {
    let select = document.getElementById('page-select');
    let currentUrl = window.location.href; // Παίρνουμε το τρέχον UR 
    // Έλεγχος για να βρούμε το κατάλληλο option
    for (let option of select.options) {
        if (option.value === currentUrl) {
            select.value = option.value; // Ρύθμιση του επιλεγμένου option
            break;
        }
    }

  $(document).ready(function() { $('#page-select').select2();    }); // Εφαρμογή του Select2
};

let currentURL = window.location.href; // Λειτουργία για να ελέγξει το URL και να προσθέσει id στο body

if (currentURL.startsWith('https://grcodeclub.gr/linux/terminal/')) {
     mymenu = `
        <div class="dropdown-container contentsMenu">
            <label for="page-select" class="form-label">Περιεχόμενα :</label>
            <select id="page-select" class="form-select" onchange="redirectToPage()">
                <option value="https://grcodeclub.gr/linux/">Linux</option>
                <option value="https://grcodeclub.gr/linux/linux-directory-structure">Δομή Καταλόγων Linux</option>
                <option value="https://grcodeclub.gr/linux/terminal/">Terminal</option>
            </select>
        </div>`;

    let addHeaderDiv = document.getElementById('linux-menu'); // Ελέγξτε ότι το 'linux-menu' υπάρχει
    if (addHeaderDiv) {
        addHeaderDiv.innerHTML = mymenu; // Προσθέτει το dropdown στο DOM
        $('#page-select').select2(); // Εφαρμογή του Select2 αμέσως μετά την προσθήκη του HTML
    }
}

function redirectToPage() {
    var selectedValue = $('#page-select').val(); // Χρησιμοποιεί το στοιχείο που καλεί τη λειτουργία
    window.location.href = selectedValue; // Ανακατεύθυνση
}

