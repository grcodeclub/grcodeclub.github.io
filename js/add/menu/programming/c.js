const mymenu = `
 <label for="page-select" class="form-label">Επιλογή Σελίδας:</label>
            <select id="page-select" class="form-select" onchange="redirectToPage()">
                <option value="https://grcodeclub.gr/c/">Αρχική σελίδα</option>
                <option value="https://github.com/grcodeclub/c">GitHub</option>
                <option value="https://grcodeclub.gr/c/command">Εντολές</option>
                <option value="https://grcodeclub.gr/c/stract">Δομή - Struct</option>
                <option value="https://grcodeclub.gr/c/library">Βιβλιοθήκες</option>
                <option value="https://grcodeclub.gr/c/examples">Παραδείγματα</option>
                <option value="https://grcodeclub.gr/c/files">Αρχεία</option>
            </select>
`;

// Εύρεση του στόχου με το id 'addHeader'
const addMenu = document.getElementById('page_menu');

// Προσθήκη του HTML περιεχομένου στο div με το id 'addHeader'
if (addMenu) {addMenu.innerHTML = mymenu;}
