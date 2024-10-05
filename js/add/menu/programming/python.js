// Ο κώδικας παραμένει ο ίδιος για την προσθήκη του dropdown

// Το HTML περιεχόμενο του dropdown
const mymenu = `
<div class="dropdown-container highlight">
    <label for="page-select" class="form-label">Επιλογή Σελίδας:</label>
    <select id="page-select" class="form-select" onchange="redirectToPage()">
        <option value="https://grcodeclub.gr/">Επιλέξτε σελίδα</option>
        <option value="https://github.com/grcodeclub/python">GitHub</option>
        <option value="https://grcodeclub.gr/python/command">Εντολές</option>
        <option value="https://grcodeclub.gr/python/library">Βιβλιοθήκες</option>
        <option value="https://grcodeclub.gr/python/examples">Παραδείγματα</option>
        <option value="https://grcodeclub.gr/python/files">Αρχεία</option>
        <option value="https://grcodeclub.gr/python/terminal">Terminal</option>
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
    
    // Έλεγχος για να βρούμε το κατάλληλο option
    for (let option of select.options) {
        if (option.value === currentUrl) {
            select.value = option.value; // Ρύθμιση του επιλεγμένου option
            break;
        }
    }
};


const submenu = `
  <ul style="list-style-type: none;" class="navsubmenu">
            <li class="submenu">
                <a class="nav-link active" href="#">Επιλογή A</a>
            </li>
            <li class="submenu">
                <a class="nav-link" href="#">Επιλογή B</a>
            </li>
            <li class="submenu">
                <a class="nav-link" href="#">Επιλογή C</a>
            </li>
            <li class="submenu">
                <a class="nav-link" href="#">Επιλογή D</a>
            </li>
            <li class="submenu">
                <a class="nav-link" href="#">Επιλογή E</a>
            </li>
        </ul>
        `;

const addMemnu = document.getElementById('sidebar'); // Εύρεση του στόχου με το id 'addHeader'

if (addMemnu) {addMemnu.innerHTML = submenu;} // Προσθήκη του HTML περιεχομένου στο div με το id 'addHeader

