document.addEventListener('DOMContentLoaded', function() {
    const itemsPerPage = 15;
    let currentPage = 1;

    const table1 = document.getElementById('table1');
    const rows1 = table1.querySelectorAll('tr');
    const headerRow = table1.querySelector('#title-table1');

    function displayTable(page) {
        const start = (page - 1) * itemsPerPage + 1; // +1 to skip header row
        const end = start + itemsPerPage;
        const tableBody = document.querySelector('#table tbody');
        tableBody.innerHTML = '';

        // Add header row
        if (headerRow) {
            tableBody.appendChild(headerRow.cloneNode(true)); // Use cloneNode to keep original header
        }

        // Paginate rows, skipping the header row
        const paginatedItems = Array.from(rows1).slice(start, end);
        paginatedItems.forEach(row => {
            tableBody.appendChild(row.cloneNode(true)); // Use cloneNode to copy row
        });

        applyRowColors(); // Εφαρμογή χρωματισμού μετά την απόδοση του πίνακα
        displayPagination();
    }

    function fullTable() {
        const tableBody = document.querySelector('#table tbody');
        tableBody.innerHTML = '';

        // Add header row
        if (headerRow) {
            tableBody.appendChild(headerRow.cloneNode(true)); // Use cloneNode to keep original header
        }

        const searchTerm = document.getElementById('searchInput1').value.trim().toLowerCase();

        rows1.forEach(row => {
            if (row === headerRow) return; // Skip header row

            // Get cells from the row
            const cells = row.querySelectorAll('td');

            // Check if at least one of the two specified columns contains the search term
            const column1Match = cells[0].textContent.toLowerCase().includes(searchTerm);

            if (column1Match) {
                tableBody.appendChild(row.cloneNode(true)); // Use cloneNode to copy row
            }
        });

        applyRowColors(); // Εφαρμογή χρωματισμού μετά την απόδοση του πλήρους πίνακα
    }

    function displayPagination() {
        const pagination = document.getElementById('pagination1');
        pagination.innerHTML = '';

        const totalPages = Math.ceil((rows1.length - 1) / itemsPerPage); // Adjusted for header row
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
            if (i === currentPage) {
                button.disabled = true;
            }
            button.addEventListener('click', () => {
                currentPage = i;
                displayTable(currentPage);
            });
            pagination.appendChild(button);
        }
    }

    function applyRowColors() {
        const tableRows = document.querySelectorAll('#table tbody tr:not(#title-table1)'); // Επιλέγουμε όλες τις γραμμές εκτός από την επικεφαλίδα

        tableRows.forEach((row, index) => {
            if (index % 2 === 0) {
                row.style.backgroundColor = 'rgba(211, 211, 211, 0.211)'; // Αλλάζουμε το χρώμα σε ανοιχτό γκρι για τις ζυγές γραμμές
            }
        });
    }

    function checkAndDisplayTable() {
        const searchInput = document.getElementById('searchInput1');
        
        if (searchInput.value.trim() !== '') {
            // Display full table when search input is not empty
            const pagination = document.getElementById('pagination1');
            searchInput.style.display = 'block';
            pagination.style.display = 'none';
            fullTable();
        } else {
            // Otherwise, display paginated table
            displayTable(currentPage);
            searchInput.style.display = 'block'; // Keep the search input visible
            const pagination = document.getElementById('pagination1');
            pagination.style.display = 'block';
        }
    }

    // Add event listener to the search input
    const searchInput = document.getElementById('searchInput1');
    searchInput.addEventListener('input', checkAndDisplayTable);

    // Initial table display based on search input
    checkAndDisplayTable();
});
