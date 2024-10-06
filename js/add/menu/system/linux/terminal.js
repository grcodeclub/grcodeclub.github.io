// Ο κώδικας παραμένει ο ίδιος για την προσθήκη του dropdown

// Το HTML περιεχόμενο του dropdown
const termMenu = `
<div class="dropdown-container contentsMenu">
<select id="term-select" class="form-select" onchange="redirectToPage()">
      <option value="https://grcodeclub.gr/linux/terminal/">Terminal</option>
</select>
<br>
</div>
`;

// Εύρεση του στοιχείου με το id 'addHeader'
const addTerm = document.getElementById('linux-menu');

// Εύρεση του επόμενου στοιχείου (next sibling) μετά το 'addHeader'
if (addTerm) {addTerm.innerHTML = termMenu;} // Προσθήκη του HTML περιεχομένου στο div με το id 'addHeader


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

    $(document).ready(function() {
            // Εφαρμογή του Select2
            $('#term-select').select2();

          
        });
};

    
