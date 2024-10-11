// Ορίζει τον αριθμό των στοιχείων ανά σελίδα
const itemsPerPage = 15;
// Αρχικοποιεί την τρέχουσα σελίδα
let currentPage = 1;

// Παίρνει τον πίνακα από το DOM
const table1 = document.getElementById('table_page');
// Παίρνει όλες τις γραμμές του πίνακα
const rows1 = table1.querySelectorAll('tr');
// Παίρνει τη γραμμή επικεφαλίδας του πίνακα
const headerRow = table1.querySelector('#title-table');

// Συνάρτηση για να εμφανίσει τον πίνακα με βάση την τρέχουσα σελίδα
function displayTable(page) {
    // Υπολογίζει την αρχή και το τέλος των στοιχείων για την τρέχουσα σελίδα
    const start = (page - 1) * itemsPerPage + 1; // +1 για να παρακάμψει τη γραμμή επικεφαλίδας
    const end = start + itemsPerPage;
    // Παίρνει το σώμα του πίνακα
    const tableBody = document.querySelector('#table_page tbody');
    // Καθαρίζει το σώμα του πίνακα
    tableBody.innerHTML = '';

    // Προσθέτει τη γραμμή επικεφαλίδας
    if (headerRow) {
        tableBody.appendChild(headerRow.cloneNode(true)); // Χρησιμοποιεί cloneNode για να διατηρήσει την αρχική επικεφαλίδα
    }

    // Σελιδοποίηση των γραμμών, παρακάμπτοντας τη γραμμή επικεφαλίδας
    const paginatedItems = Array.from(rows1).slice(start, end);
    paginatedItems.forEach(row => {
        tableBody.appendChild(row.cloneNode(true)); // Χρησιμοποιεί cloneNode για να αντιγράψει τη γραμμή
    });

    applyRowColors(); // Εφαρμόζει χρώματα μετά την απόδοση του πίνακα
    displayPagination(); // Εμφανίζει την σελιδοποίηση
}

// Συνάρτηση για να εμφανίσει τα κουμπιά σελιδοποίησης
function displayPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = ''; // Καθαρίζει τα προηγούμενα κουμπιά σελιδοποίησης

    // Υπολογίζει τον συνολικό αριθμό σελίδων
    const totalPages = Math.ceil((rows1.length - 1) / itemsPerPage); // Ρυθμίζεται για τη γραμμή επικεφαλίδας
    const maxPagesToShow = 5; // Μέγιστος αριθμός σελίδων που θα εμφανίζονται

    // Υπολογίζει την αρχή και το τέλος των σελίδων προς εμφάνιση
    let startPage = currentPage - 2;
    let endPage = currentPage + 2;

    // Ρυθμίζει την αρχή και το τέλος αν είναι λιγότερες από 1
    if (startPage < 1) {
        startPage = 1;
        endPage = Math.min(totalPages, maxPagesToShow);
    }

    // Ρυθμίζει την αρχή και το τέλος αν είναι περισσότερες από τον συνολικό αριθμό σελίδων
    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    // Δημιουργεί κουμπιά για τις σελίδες
    for (let i = startPage; i <= endPage; i++) {
        const button = document.createElement('button'); // Δημιουργεί ένα νέο κουμπί
        button.textContent = i; // Ορίζει το κείμενο του κουμπιού
        if (i === currentPage) {
            button.disabled = true; // Απενεργοποιεί το κουμπί της τρέχουσας σελίδας
        }
        // Προσθέτει χειριστή κλικ στο κουμπί
        button.addEventListener('click', () => {
            currentPage = i; // Ρυθμίζει την τρέχουσα σελίδα
            displayTable(currentPage); // Επαναφορτώνει τον πίνακα για την νέα σελίδα
        });
        pagination.appendChild(button); // Προσθέτει το κουμπί στην σελιδοποίηση
    }
}

// Συνάρτηση για την εφαρμογή χρωμάτων στις γραμμές
function applyRowColors() {
    const tableRows = document.querySelectorAll('#table_page tbody tr:not(tr[id="title-table"])'); // Επιλέγει όλες τις γραμμές εκτός από την επικεφαλίδα

    tableRows.forEach((row, index) => {
        // Ελέγχει αν ο δείκτης είναι ζυγός
        if (index % 2 === 0) {
            row.style.backgroundColor = 'rgba(211, 211, 211, 0.211)'; // Αλλάζει το χρώμα σε ανοιχτό γκρι για τις ζυγές γραμμές
        }
    });
}

// Αρχική εμφάνιση του πίνακα
displayTable(currentPage);

// Εναλλαγή χρώματος φόντου στις γραμμές
rows1.forEach((row, index) => { if (index % 2 === 0) { row.style.backgroundColor = 'rgba(211, 211, 211, 0.211)'; } });
