// Το HTML περιεχόμενο του dropdown
const mymenu = `
<div class="dropdown-container highlight">
    <label for="page-select" class="form-label">Επιλογή Σελίδας:</label>
    <select id="page-select" class="form-select" onchange="redirectToPage()">
        <option value="./">Επιλέξτε σελίδα</option>
        <option value="https://github.com/grcodeclub/c">GitHub</option>
        <option value="./command">Εντολές</option>
        <option value="./stract">Δομή - Struct</option>
        <option value="./library">Βιβλιοθήκες</option>
        <option value="./examples">Παραδείγματα</option>
        <option value="./files">Αρχεία</option>
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
