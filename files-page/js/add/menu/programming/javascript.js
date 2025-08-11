
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
    <option value="https://grcodeclub.gr/javascript/commands">Βασικές εντολές</option>
    <option value="https://grcodeclub.gr/javascript/commands/arrays">Arrays</option>
    <option value="https://grcodeclub.gr/javascript/restriction">Περιορισμοί</option>
    <option value="https://grcodeclub.gr/javascript/messages">Mηνύματα - Ειδοποιήσεις</option>
    <option value="https://grcodeclub.gr/javascript/libraries-and-framework">Βιβλιοθήκες - Framework</option>
    <optgroup label="Βιβλιοθήκες">
        <option value="https://grcodeclub.gr/javascript/library/jquery">jQuery</option>
    </optgroup>
    <optgroup label="DOM">
        <option value="https://grcodeclub.gr/javascript/dom/">Βασικές Εντολές</option>
        <option value="https://grcodeclub.gr/javascript/dom/eventlisteners">EventListeners</option>
    </optgroup>
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
        $(document).ready(function() {
            // Εφαρμογή του Select2
            $('#page-select').select2();

          
        });
};
