// Το HTML περιεχόμενο Select
    var mymenu = `
    <div class="dropdown-container contentsMenu">
        <label for="page-select" class="form-label">Περιεχόμενα :</label>
        <select id="page-select" class="form-select" onchange="redirectToPage()">
            <option value="https://grcodeclub.gr/linux/">Linux</option>
            <option value="https://grcodeclub.gr/linux/linux-directory-structure">Δομή Καταλόγων Linux</option>
            <option value="https://grcodeclub.gr/linux/terminal/">Terminal</option>
        </select>
    </div>
    `;

    // Το δεύτερο dropdown (Terminal)
    const termmymenu = `
    <div class="dropdown-container contentsMenu">
        <label for="terminal-select" class="form-label">Εντολές :</label>
        <select id="terminal-select" style="width: 200px;">
            <option value="A">Option A</option>
            <option value="B">Option B</option>
            <option value="C">Option C</option>
            <option value="D">Option D</option>
        </select>
    </div>`;

    const currentUrl = window.location.href;  

    // Εύρεση του στοιχείου με το id 'addHeader'
    const addHeader = document.getElementById('addHeader');
    // Εύρεση του επόμενου στοιχείου (next sibling) μετά το 'addHeader'
    const nextDiv = addHeader.nextElementSibling;
    // Προσθήκη του HTML περιεχομένου στην αρχή του επόμενου div
    if (nextDiv) { 
        nextDiv.insertAdjacentHTML('afterbegin', mymenu); 
        nextDiv.insertAdjacentHTML('beforeend', termmymenu); // Προσθέτει και το δεύτερο dropdown
    }

    // Συνάρτηση για την ανακατεύθυνση στη σελίδα ανάλογα με την επιλογή
    function redirectToPage() {
        var select = document.getElementById('page-select');
        var selectedValue = select.value; // Παίρνουμε την τιμή του επιλεγμένου option
        if (selectedValue) { window.location.href = selectedValue; } // Ανακατεύθυνση στην επιλεγμένη σελίδα
    }

    window.onload = function() {
        const select = document.getElementById('page-select');
        // Έλεγχος για να βρούμε το κατάλληλο option
        for (var option of select.options) {
            if (option.value === currentUrl) {
                select.value = option.value; // Ρύθμιση του επιλεγμένου option
                break;
            }
        }

        // Αρχικοποίηση του Select2 για και τα δύο dropdowns
        $(document).ready(function() {
            $('#page-select').select2();
            $('#terminal-select').select2(); // Εφαρμογή Select2 για το δεύτερο dropdown
        });
    };
