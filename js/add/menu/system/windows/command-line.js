// Το HTML περιεχόμενο του πρώτου dropdown
const mymenu = `
<div class="dropdown-container contentsMenu">
    <label for="page-select" class="form-label">Περιεχόμενα :</label>
    <select id="page-select" class="form-select">
        <option value="https://grcodeclub.gr/windows/">Microsoft Windows</option>
        <option value="https://grcodeclub.gr/windows/command-line">Command Line</option>
        <option value="https://grcodeclub.gr/windows/powershell/">PowerShell</option>
        <option value="https://grcodeclub.gr/windows/more/run">Run Commands</option>
        <option value="https://grcodeclub.gr/windows/more/language-id">Language ID</option>

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
const cmd = `
<select id="select-cmd" class="form-select">
    <option value="" disabled selected hidden>Επιλέξτε μια επιλογή</option> <!-- Placeholder option που είναι κρυφό και ανενεργό -->
    <option value="https://grcodeclub.gr/windows/command-line/">Command Line</option>
    <option value="https://grcodeclub.gr/windows/command-line/network">Εντολές Δικτύου</option>
    <option value="https://grcodeclub.gr/windows/command-line/system/">Εντολές Συστήματος</option>
    <option value="https://grcodeclub.gr/windows/command-line/system/winget">Winget</option>
</select>
`;

        // Εύρεση του στοιχείου με το id 'linux-cmd'
const addcmd = document.getElementById('linux-cmd');
if (addcmd) { 
    addcmd.innerHTML = cmd;
}

// Συνάρτηση για την ανακατεύθυνση από το page-select dropdown
function redirectFromPageSelect() {
    const pageselect = document.getElementById('page-select');
    const pageSelectedValue = pageselect ? pageselect.value : null;
    if (pageSelectedValue) {
        window.location.href = pageSelectedValue;
    }
}

// Συνάρτηση για την ανακατεύθυνση από το select-cmd dropdown
function redirectFromcmdSelect() {
    const cmdselect = document.getElementById('select-cmd');
    const cmdSelectedValue = cmdselect ? cmdselect.value : null;
    if (cmdSelectedValue) {
        window.location.href = cmdSelectedValue;
    }
}

// Συνδυασμένος κώδικας για το window.onload
window.onload = function() {
        const cmdselect = document.getElementById('select-cmd');
        const pageselect = document.getElementById('page-select');
        const currentUrl = window.location.href; // Παίρνουμε το τρέχον URL

            // Αναθέτουμε τα onchange events αφού τα στοιχεία έχουν φορτωθεί
    if (pageselect) {
        pageselect.onchange = redirectFromPageSelect;
    }
    if (cmdselect) {
        cmdselect.onchange = redirectFromcmdSelect;
    }
        
        // Έλεγχος για το page-select
        if (pageselect) {
            if (currentUrl.startsWith('https://grcodeclub.gr/linux/cmdinal/')) {
                pageselect.value = 'https://grcodeclub.gr/linux/cmdinal/';
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


        
        // Έλεγχος για το select-cmd
        if (cmdselect) {
            for (let cmdoption of cmdselect.options) {
                if (cmdoption.value === currentUrl) {
                    cmdselect.value = cmdoption.value;
                    break;
                }
            }
            $('#select-cmd').select2({ placeholder: "Αναζήτηση εντολής ή σετ εντολών ", allowClear: true }); // Εφαρμογή του select2 για το select-cmd
        }};
