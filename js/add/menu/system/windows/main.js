// Το HTML περιεχόμενο του dropdown
const mymenu = `
<div class="dropdown-container contentsMenu">
    <label for="page-select" class="form-label">Περιεχόμενα :</label>
    <select id="page-select" class="form-select" onchange="redirectToPage()">
        <option value="https://grcodeclub.gr/windows/">Microsoft Windows</option>
        <option value="https://grcodeclub.gr/windows/command-line/">Command Line</option>
        <option value="https://grcodeclub.gr/windows/powershell">PowerShell</option>
        <option value="https://grcodeclub.gr/windows/more/run">Run Commands</option>
        <option value="https://grcodeclub.gr/windows/more/language-id">Language ID</option>
    </select>
</div>
`;

// Εύρεση του στοιχείου με το id 'addHeader'
const addHeader = document.getElementById('addHeader');

// Εύρεση του επόμενου στοιχείου (next sibling) μετά το 'addHeader'
const nextDiv = addHeader.nextElementSibling;

// Προσθήκη του HTML περιεχομένου στην αρχή του επόμενου div (αν δεν έχει ήδη προστεθεί)
if (nextDiv && !nextDiv.querySelector('#page-select')) {
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

    if (currentUrl.startsWith('https://grcodeclub.gr/linux/terminal/')){select.value = 'https://grcodeclub.gr/linux/terminal/';}
    else{
         // Έλεγχος για να βρούμε το κατάλληλο option
        for (let option of select.options) {
        if (option.value === currentUrl) {
            select.value = option.value; // Ρύθμιση του επιλεγμένου option
            break;
        }
    }
    }
    // Εφαρμογή του Select2 χωρίς το $(document).ready
   $('#page-select').select2();
    
};
