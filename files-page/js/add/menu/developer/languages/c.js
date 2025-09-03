// Ο κώδικας παραμένει ο ίδιος για την προσθήκη του dropdown

// Το HTML περιεχόμενο του dropdown
const mymenu = `
<div class="container dropdown-container contentsMenu">
    <div class="row g-2 align-items-center">
        <div class="col-auto">
            <label for="page-select" class="form-label">Περιεχόμενα</label>
        </div>
        <div class="col">
        <select id="page-select" class="form-select" onchange="redirectToPage()">
            <option value="https://grcodeclub.gr/developer/languages/c/">Εισαγωγή</option>
            <option value="https://grcodeclub.gr/developer/languages/c/library">Βιβλιοθήκες</option>
            <option value="https://grcodeclub.gr/developer/languages/c/commands/variables">Μεταβλητές</option>
            <option value="https://grcodeclub.gr/developer/languages/c/commands/output_input">Είσοδος / Έξοδος</option>
            <option value="https://grcodeclub.gr/developer/languages/c/commands/conditions">Δομή ελέγχου</option>
            <option value="https://grcodeclub.gr/developer/languages/c/commands/loop">Δομή επανάληψης</option>
            <option value="https://grcodeclub.gr/developer/languages/c/commands/function">Συναρτήσεις</option>
            <option value="https://grcodeclub.gr/developer/languages/c/files">Αρχεία</option>
            <option value="https://grcodeclub.gr/developer/languages/c/stract">Δομή - Struct</option>
            </select>
        </div>
    </div>
</div>`;

// Εύρεση του στοιχείου με το id 'addHeader'
const addHeader = document.getElementById('addHeader');

// Εύρεση του επόμενου στοιχείου (next sibling) μετά το 'addHeader'
const nextDiv = addHeader.nextElementSibling;

// Προσθήκη του HTML περιεχομένου στην αρχή του επόμενου div
if (nextDiv) {
    nextDiv.insertAdjacentHTML('afterbegin', mymenu);
}

// Συνάρτηση για την ανακατεύθυνση στη σελίδα ανάλογα με την επιλογή
function redirectToPage() {
    const select = document.getElementById('page-select');
    const selectedValue = select.value; // Παίρνουμε την τιμή του επιλεγμένου option
    
    if (selectedValue) {
        window.location.href = selectedValue; // Ανακατεύθυνση στην επιλεγμένη σελίδα
    }
}

// Ρύθμιση του επιλεγμένου option με βάση το τρέχον URL
window.onload = function() {
    const select = document.getElementById('page-select');
    const currentUrl = window.location.href; // Παίρνουμε το τρέχον URL
    
    // Έλεγχος για να βρούμε το κατάλληλο option
    for (let option of select.options) {
        if (option.value === currentUrl) {
            select.value = option.value; // Ρύθμιση του επιλεγμένου option
            break;
        }
    }

    const currentURL = window.location.href;  // Λειτουργία για να ελέγξει το URL και να προσθέσει id στο body
    if (currentURL.startsWith('https://grcodeclub.gr/developer/languages/c/library/')){
            const targetValue = "https://grcodeclub.gr/developer/languages/c/library/";
            select.value = targetValue;    
    }
        $(document).ready(function() {
            // Εφαρμογή του Select2
            $('#page-select').select2();

          
        });
};