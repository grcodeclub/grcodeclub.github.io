const itemsPerPage = 15;
let currentPage = 1;
const table1 = document.getElementById('table_page');
const rows1 = Array.from(table1.querySelectorAll('tr'));
const headerRow = table1.querySelector('tr#title-page'); // Σωστή επιλογή της επικεφαλίδας

function displayTable(page) {
    const start = (page - 1) * itemsPerPage + 1; // +1 για να παραλείψουμε την επικεφαλίδα
    const end = start + itemsPerPage;
    table1.innerHTML = ''; // Καθαρίστε τον πίνακα πριν από την απόδοση

       // Εκτύπωση του headerRow για έλεγχο
    if (headerRow) {
        console.log('Επικεφαλίδα:', headerRow.outerHTML);
        table1.appendChild(headerRow.cloneNode(true)); // Προσθέστε την επικεφαλίδα
    } else {
        console.log('Η επικεφαλίδα δεν βρέθηκε.');
    }
    
    // Σελιδοποιήστε τις γραμμές, παραλείποντας την επικεφαλίδα
    const paginatedItems = rows1.slice(1).slice(start, end); // Σημαντικό: παραλείπουμε την επικεφαλίδα μόνο για την αποκοπή
    paginatedItems.forEach(row => { table1.appendChild(row.cloneNode(true)); } // Χρησιμοποιήστε cloneNode για αντιγραφή της γραμμής
    );

    applyRowColors();
    displayPagination();
}


function fullTable() {
    table1.innerHTML = ''; // Καθαρίστε τον πίνακα πριν από την απόδοση

    if (headerRow) {    table1.appendChild(headerRow.cloneNode(true)); } // Προσθέστε την επικεφαλίδα

    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();

    rows1.forEach(row => {
        if (row === headerRow) return; // Αποκλείστε την επικεφαλίδα

        const cells = row.querySelectorAll('td');
        const column1Match = cells[0].textContent.toLowerCase().includes(searchTerm);

        if (column1Match) { table1.appendChild(row.cloneNode(true)); }// Χρησιμοποιήστε cloneNode για αντιγραφή της γραμμής
        
    });

    applyRowColors();
}


function displayPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    const totalPages = Math.ceil((rows1.length - 1) / itemsPerPage); // Αφαιρέστε την επικεφαλίδα
    const maxPagesToShow = 5;
    let startPage = currentPage - 2;
    let endPage = currentPage + 2;

    if (startPage < 1) {
        startPage = 1;
        endPage = Math.min(totalPages, maxPagesToShow);
    }

    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        if (i === currentPage) { button.disabled = true; }
        button.addEventListener('click', () => {
            currentPage = i;
            displayTable(currentPage);
        });
        pagination.appendChild(button);
    }
}

function applyRowColors() {
    const tableRows = table1.querySelectorAll('tr:not(#title-table)'); // Εξαιρούμε την επικεφαλίδα

    tableRows.forEach((row, index) => {
        if (index % 2 === 0) {
            row.style.backgroundColor = 'rgba(211, 211, 211, 0.211)'; // Ανοιχτό γκρι
        }
    });
}

function checkAndDisplayTable() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput.value.trim() !== '') {
        // Εμφάνιση ολόκληρου του πίνακα όταν υπάρχει όρος αναζήτησης
        const pagination = document.getElementById('pagination');
        searchInput.style.display = 'block';
        pagination.style.display = 'none';
        fullTable();
    } else {
        // Εμφάνιση σελιδοποιημένου πίνακα αν δεν υπάρχει όρος αναζήτησης
        displayTable(currentPage);
        searchInput.style.display = 'block'; // Διατηρήστε ορατό το πεδίο αναζήτησης
        const pagination = document.getElementById('pagination');
        pagination.style.display = 'block';
    }
}

// Προσθέστε event listener στο πεδίο αναζήτησης
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', checkAndDisplayTable);
checkAndDisplayTable();    // Αρχική εμφάνιση του πίνακα βασισμένη στην αναζήτηση
