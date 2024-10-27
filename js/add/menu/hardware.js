// Ο κώδικας παραμένει ο ίδιος για την προσθήκη του dropdown

// Το HTML περιεχόμενο του dropdown
const mymenu = `
<div class="dropdown-container contentsMenu">
    <label for="page-select" class="form-label">Περιεχόμενα :</label>
<select id="page-select" class="form-select" onchange="redirectToPage()">
    <option value="https://grcodeclub.gr/hardware/">Εισαγωγή</option>
    <option value="https://grcodeclub.gr/hardware/cables">Τύποι καλωδίων</option>
    <option value="https://grcodeclub.gr/hardware/code-resistors">Χρωματικός Κώδικας Αντιστάσεων</option>
    <option value="https://grcodeclub.gr/hardware/pc-builder">PC Builder</option>
    <option value="https://grcodeclub.gr/hardware/electronics">Μαθηματικοί τύποι ηλεκτρονικής</option>

</select>
</div>
`;

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
    console.log(select);
    console.log(select.options);
    // Έλεγχος για να βρούμε το κατάλληλο option
    for (let option of select.options) {
         console.log(currentUrl, option.value);
        if (option.value === currentUrl) {
            select.value = option.value; // Ρύθμιση του επιλεγμένου option
            console.log(select.value);
            break;
        }
    }

            // Εφαρμογή του Select2
            $('#page-select').select2();

          
};

    
