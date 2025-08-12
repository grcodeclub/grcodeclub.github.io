// Το HTML περιεχόμενο του πρώτου dropdown
const mymenu = `
<div class="container dropdown-container contentsMenu">
    <div class="row g-2 align-items-center">
        <div class="col-auto">
            <label for="page-select" class="form-label">Περιεχόμενα</label>
        </div>
        <div class="col">
        <select id="page-select" class="form-select" onchange="redirectToPage()">
            <option value="https://grcodeclub.gr/operating-systems/linux/">Linux</option>
            <option value="https://grcodeclub.gr/operating-systems/linux-directory-structure">Δομή Καταλόγων</option>
            <option value="https://grcodeclub.gr/operating-systems/linux/terminal/">Terminal</option>
            <option value="https://grcodeclub.gr/operating-systems/linux/install/">Εγκατάσταση Προγραμμάτων</option>
            <option value="https://grcodeclub.gr/operating-systems/linux/more/distro">Distros</option>    
            </select>
        </div>
    </div>
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
<div class="container dropdown-container contentsMenu" style="margin-top:0%">
    <div class="row g-2 align-items-center">
        <div class="col-auto">
            <label for="page-select" class="form-label">Εντολές</label>
        </div>
        <div class="col">
        <select id="select-term" class="form-select" onchange="redirectToPage()">
    <option value="" disabled selected hidden>Επιλέξτε μια επιλογή</option> <!-- Placeholder option που είναι κρυφό και ανενεργό -->
    <option value="https://grcodeclub.gr/operating-systems/linux/terminal/system/">Εντολές Συστήματος</option>
    <option value="https://grcodeclub.gr/operating-systems/linux/terminal/files/">Διαχείριση Αρχείων και Καταλόγων</option>
    <option value="https://grcodeclub.gr/operating-systems/linux/terminal/network">Εντολές Δικτύου</option>
    <option value="https://grcodeclub.gr/operating-systems/linux/terminal/system/users">Users</option>
        <option value="https://grcodeclub.gr/operating-systems/linux/terminal/files/decompress">Τρόπος αποσυμπίεσης αρχείων</option>
    <option value="https://grcodeclub.gr/operating-systems/linux/terminal/files/grep">grep</option>
    <option value="https://grcodeclub.gr/operating-systems/linux/terminal/tools/git">git</option>
    <option value="https://grcodeclub.gr/operating-systems/linux/terminal/system/apt">apt</option>
    <option value="https://grcodeclub.gr/operating-systems/linux/terminal/system/snap">snap</option>
            </select>
        </div>
    </div>
</div>
`;

        // Εύρεση του στοιχείου με το id 'linux-term'
const addTerm = document.getElementById('linux-term');
if (addTerm) { 
    addTerm.innerHTML = termMenu;
}

// Συνάρτηση για την ανακατεύθυνση από το page-select dropdown
function redirectFromPageSelect() {
    const pageselect = document.getElementById('page-select');
    const pageSelectedValue = pageselect ? pageselect.value : null;
    if (pageSelectedValue) {
        window.location.href = pageSelectedValue;
    }
}

// Συνάρτηση για την ανακατεύθυνση από το select-term dropdown
function redirectFromTermSelect() {
    const termselect = document.getElementById('select-term');
    const termSelectedValue = termselect ? termselect.value : null;
    if (termSelectedValue) {
        window.location.href = termSelectedValue;
    }
}

// Συνδυασμένος κώδικας για το window.onload
window.onload = function() {
        const termselect = document.getElementById('select-term');
        const pageselect = document.getElementById('page-select');
        const currentUrl = window.location.href; // Παίρνουμε το τρέχον URL

            // Αναθέτουμε τα onchange events αφού τα στοιχεία έχουν φορτωθεί
    if (pageselect) {
        pageselect.onchange = redirectFromPageSelect;
    }
    if (termselect) {
        termselect.onchange = redirectFromTermSelect;
    }
        
        // Έλεγχος για το page-select
        if (pageselect) {
            if (currentUrl.startsWith('https://grcodeclub.gr/operating-systems/linux/terminal/')) {
                pageselect.value = 'https://grcodeclub.gr/operating-systems/linux/terminal/';
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


        
        // Έλεγχος για το select-term
        if (termselect) {
            for (let termoption of termselect.options) {
                if (termoption.value === currentUrl) {
                    termselect.value = termoption.value;
                    break;
                }
            }
            $('#select-term').select2({ placeholder: "Αναζήτηση εντολής ή σετ εντολών ", allowClear: true }); // Εφαρμογή του select2 για το select-term
        }};
