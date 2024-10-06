// Ο κώδικας παραμένει ο ίδιος για την προσθήκη του πρώτου dropdown

// Το HTML περιεχόμενο του πρώτου dropdown
const mymenu = `
<div class="dropdown-container contentsMenu">
    <label for="page-select" class="form-label">Περιεχόμενα :</label>
    <select id="page-select" class="form-select" onchange="redirectToPage()">
        <option value="https://grcodeclub.gr/linux/">Linux</option>
        <option value="https://grcodeclub.gr/linux/linux-directory-structure">Δομή Καταλόγων</option>
        <option value="https://grcodeclub.gr/linux/terminal/">Terminal</option>
    </select>
</div>
`;

// Εύρεση του στοιχείου με το id 'addHeader'
const addHeader = document.getElementById('addHeader');

// Προσθήκη του HTML περιεχομένου αν δεν έχει ήδη προστεθεί
const nextDiv = addHeader ? addHeader.nextElementSibling : null;
if (nextDiv && !nextDiv.querySelector('#page-select')) {
    nextDiv.insertAdjacentHTML('afterbegin', mymenu);
}

// Το HTML περιεχόμενο του δεύτερου dropdown
const termMenu = `
<select id="term-select" class="form-select" onchange="redirectToPage()">
    <option value="" disabled selected hidden>Επιλέξτε μια επιλογή</option> <!-- Placeholder option που είναι κρυφό και ανενεργό -->
    <option value="https://grcodeclub.gr/linux/terminal/system/">Εντολές Συστήματος</option>
    <option value="https://grcodeclub.gr/linux/terminal/files/grep">grep</option>
    <option value="https://grcodeclub.gr/linux/terminal/system/users">Users</option>
    <option value="https://grcodeclub.gr/linux/terminal/files/">Διαχείριση Αρχείων και Καταλόγων</option>
    <option value="https://grcodeclub.gr/linux/terminal/tools/git">Git-Commands</option>
    <option value="https://grcodeclub.gr/linux/terminal/system/apt">apt</option>
    <option value="https://grcodeclub.gr/linux/terminal/system/snap">snap</option>
</select>
`;

// Εύρεση του στοιχείου με το id 'linux-menu'
const addTerm = document.getElementById('linux-menu');
if (addTerm) { 
    addTerm.innerHTML = termMenu;
}

// Συνάρτηση για την ανακατεύθυνση στη σελίδα ανάλογα με την επιλογή
function redirectToPage() {
    const termselect = document.getElementById('term-select');
    const selectedValue = termselect ? termselect.value : null;
    if (selectedValue) {
        window.location.href = selectedValue;
    }

    const pageselect = document.getElementById('page-select');
    const pageSelectedValue = pageselect ? pageselect.value : null;
    if (pageSelectedValue) {
        window.location.href = pageSelectedValue;
    }
}

// Συνδυασμένος κώδικας για το window.onload
window.onload = function() {
    const termselect = document.getElementById('term-select');
    const pageselect = document.getElementById('page-select');
    const currentUrl = window.location.href; // Παίρνουμε το τρέχον URL

    // Έλεγχος για το page-select
    if (pageselect) {
        if (currentUrl.startsWith('https://grcodeclub.gr/linux/terminal/')) {
            pageselect.value = 'https://grcodeclub.gr/linux/terminal/';
        } else {
            for (let option of pageselect.options) {
                if (option.value === currentUrl) {
                    pageselect.value = option.value;
                    break;
                }
            }
        }
        $('#page-select').select2(); // Εφαρμογή του select2 για το page-select
    }

    // Έλεγχος για το term-select
    if (termselect) {
        for (let termoption of termselect.options) {
            if (termoption.value === currentUrl) {
                termselect.value = termoption.value;
                break;
            }
        }
        $('#term-select').select2({ placeholder: "Αναζήτηση εντολής ή σετ εντολών ", allowClear: true }); // Εφαρμογή του select2 για το term-select
    }
};
