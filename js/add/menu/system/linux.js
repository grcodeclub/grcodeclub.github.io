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

// Εύρεση του στοιχείου με το id 'addHeader'
var addHeader = document.getElementById('addHeader');
// Εύρεση του επόμενου στοιχείου (next sibling) μετά το 'addHeader'
var nextDiv = addHeader.nextElementSibling;
// Προσθήκη του HTML περιεχομένου στην αρχή του επόμενου div
if (nextDiv) { nextDiv.insertAdjacentHTML('afterbegin', mymenu); }

// Συνάρτηση για την ανακατεύθυνση στη σελίδα ανάλογα με την επιλογή
function redirectToPage() {
    var select = document.getElementById('page-select');
    var selectedValue = select.value; // Παίρνουμε την τιμή του επιλεγμένου option
    if (selectedValue) { window.location.href = selectedValue; }// Ανακατεύθυνση στην επιλεγμένη σελίδα
}

window.onload = function() {
    var select = document.getElementById('page-select');
    var currentUrl = window.location.href; // Παίρνουμε το τρέχον UR 
    // Έλεγχος για να βρούμε το κατάλληλο option
    for (var option of select.options) {
        if (option.value === currentUrl) {
            select.value = option.value; // Ρύθμιση του επιλεγμένου option
            break;
        }
    }

  $(document).ready(function() { $('#page-select').select2();    }); // Εφαρμογή του Select2
};

var currentURL = window.location.href; // Λειτουργία για να ελέγξει το URL και να προσθέσει id στο body

if (currentURL.startsWith('https://grcodeclub.gr/linux/terminal/')) {
     console.log("Terminal Menu");
     mymenu = `
        <div class="dropdown-container contentsMenu">
            <label for="termianal-select" class="form-label">Περιεχόμενα :</label>
            <select id="termianal-select" class="form-select" onchange="redirectToPage()">
                <option value="https://grcodeclub.gr/linux/">Linux</option>
                <option value="https://grcodeclub.gr/linux/linux-directory-structure">Δομή Καταλόγων Linux</option>
                <option value="https://grcodeclub.gr/linux/terminal/">Terminal</option>
            </select>
        </div>`;

    addHeaderDiv = document.getElementById('linux-menu'); // Ελέγξτε ότι το 'linux-menu' υπάρχει
    if (addHeaderDiv) {
        addHeaderDiv.innerHTML = mymenu; // Προσθέτει το dropdown στο DOM
        $('#termianal-select').select2(); // Εφαρμογή του Select2 αμέσως μετά την προσθήκη του HTML
    }
}
