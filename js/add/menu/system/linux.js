// Ο κώδικας παραμένει ο ίδιος για την προσθήκη του dropdown
// Το HTML περιεχόμενο Select
const mymenu = `
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
const addHeader = document.getElementById('addHeader');
// Εύρεση του επόμενου στοιχείου (next sibling) μετά το 'addHeader'
const nextDiv = addHeader.nextElementSibling;
// Προσθήκη του HTML περιεχομένου στην αρχή του επόμενου div
if (nextDiv) { nextDiv.insertAdjacentHTML('afterbegin', mymenu); }

// Συνάρτηση για την ανακατεύθυνση στη σελίδα ανάλογα με την επιλογή
function redirectToPage() {
    const select = document.getElementById('page-select');
    const selectedValue = select.value; // Παίρνουμε την τιμή του επιλεγμένου option
    if (selectedValue) { window.location.href = selectedValue; }// Ανακατεύθυνση στην επιλεγμένη σελίδα
}

window.onload = function() {
    const select = document.getElementById('page-select');
    const currentUrl = window.location.href; // Παίρνουμε το τρέχον UR 
    // Έλεγχος για να βρούμε το κατάλληλο option
    for (let option of select.options) {
        if (option.value === currentUrl) {
            select.value = option.value; // Ρύθμιση του επιλεγμένου option
            break;
        }
    }

  $(document).ready(function() { $('#page-select').select2();    }); // Εφαρμογή του Select2
};

    const currentURL = window.location.href;  // Λειτουργία για να ελέγξει το URL και να προσθέσει id στο body
    if (currentURL.startsWith('https://grcodeclub.gr/linux/terminal/')){
        mymenu = `
            <div class="dropdown-container contentsMenu">
                <label for="page-select" class="form-label">Περιεχόμενα :</label>
                <select id="page-select" class="form-select" onchange="redirectToPage()">
                    <option value="https://grcodeclub.gr/linux/">Linux</option>
                    <option value="https://grcodeclub.gr/linux/linux-directory-structure">Δομή Καταλόγων Linux</option>
                    <option value="https://grcodeclub.gr/linux/terminal/">Terminal</option>
                </select>
            </div>    `;
     addHeader = document.getElementById('linux-menu');
     if (addHeaderDiv) {addHeaderDiv.innerHTML = htmlContentHeader;} 
     window.onload = function() {
          $(document).ready(function() { $('#page-select').select2();    }); // Εφαρμογή του Select2
        };
    }
