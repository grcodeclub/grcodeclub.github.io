// Ο κώδικας παραμένει ο ίδιος για την προσθήκη του dropdown

// Το HTML περιεχόμενο του dropdown
const mymenu = `
<div class="dropdown-container contentsMenu">
    <label for="page-select" class="form-label">Περιεχόμενα :</label>
<select id="page-select" class="form-select" onchange="redirectToPage()">
    <option value="https://grcodeclub.gr/orologia/">Διαφορά</option>
    <option value="https://grcodeclub.gr/programming/orologia/">Προγραμματισμός</option>
    <option value="https://grcodeclub.gr/network/orologia/">Δίκτυα Υπολογιστών</option>
    <option value="https://grcodeclub.gr/system/orologia/">Λειτουργικά Συστήματα</option>
    <option value="https://grcodeclub.gr/cybersecurity/orologia/">Κυβερνοασφάλεια</option>
    <option value="https://grcodeclub.gr/linux/orologia/">Linux</option>
    <option value="https://grcodeclub.gr/windows/orologia">Microsoft Windows</option>
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

    
