// Ο κώδικας παραμένει ο ίδιος για την προσθήκη του dropdown

// Το HTML περιεχόμενο του dropdown
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

// Εύρεση του στοιχείου με το id 'addHeader'
const addTerm = document.getElementById('linux-menu');

// Εύρεση του επόμενου στοιχείου (next sibling) μετά το 'addHeader'
if (addTerm) {addTerm.innerHTML = termMenu;} // Προσθήκη του HTML περιεχομένου στο div με το id 'addHeader


// Συνάρτηση για την ανακατεύθυνση στη σελίδα ανάλογα με την επιλογή
function redirectToPage() {
    const termselect = document.getElementById('term-select');
    const termselectedValue = termselect.value; // Παίρνουμε την τιμή του επιλεγμένου option
    
    if (termselectedValue) {
        window.location.href = termselectedValue; // Ανακατεύθυνση στην επιλεγμένη σελίδα
    }
}

// Ρύθμιση του επιλεγμένου option με βάση το τρέχον URL
window.onload = function() {
    const termselect = document.getElementById('term-select');
    const pageselect = document.getElementById('[page-select');
    const termcurrentUrl = window.location.href; // Παίρνουμε το τρέχον URL
    
    // Έλεγχος για να βρούμε το κατάλληλο option
    for (let termoption of termselect.options) {
        if (option.value === termcurrentUrl) {
            termselect.value = termoption.value; // Ρύθμιση του επιλεγμένου option
            break;
        }
    }

  $('#term-select').select2({
                placeholder: "Αναζήτηση",
                allowClear: true
            });
};

    
