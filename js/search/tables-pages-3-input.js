    const itemsPerPage = 15;
    let currentPage = 1;
    
    const table1 = document.getElementById('search_table_page_3');
    const rows1 = table1.querySelectorAll('tr');
    const headerRow = table1.querySelector('#title-table');
    
    function displayTable(page) {
        const start = (page - 1) * itemsPerPage + 1; // +1 to skip header row
        const end = start + itemsPerPage;
        const tableBody = document.querySelector('#search_table_page_3 tbody');
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
        const tableBody = document.querySelector('#search_table_page_3 tbody');
        tableBody.innerHTML = '';
    
        // Add header row
        if (headerRow) {
            tableBody.appendChild(headerRow.cloneNode(true)); // Use cloneNode to keep original header
        }
    
        const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    
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

    function fullTable1() {
        const tableBody = document.querySelector('#search_table_page_3 tbody');
        tableBody.innerHTML = '';
    
        // Add header row
        if (headerRow) {
            tableBody.appendChild(headerRow.cloneNode(true)); // Use cloneNode to keep original header
        }
    
        const searchTerm = document.getElementById('searchInput2').value.trim().toLowerCase();
    
        rows1.forEach(row => {
            if (row === headerRow) return; // Skip header row
    
            // Get cells from the row
            const cells = row.querySelectorAll('td');
    
            // Check if at least one of the two specified columns contains the search term
            const column1Match = cells[1].textContent.toLowerCase().includes(searchTerm);
    
            if (column1Match) {
                tableBody.appendChild(row.cloneNode(true)); // Use cloneNode to copy row
            }
        });
    
        applyRowColors(); // Εφαρμογή χρωματισμού μετά την απόδοση του πλήρους πίνακα
    }

    function fullTable2() {
        const tableBody = document.querySelector('#search_table_page_3 tbody');
        tableBody.innerHTML = '';
    
        // Add header row
        if (headerRow) {
            tableBody.appendChild(headerRow.cloneNode(true)); // Use cloneNode to keep original header
        }
    
        const searchTerm = document.getElementById('searchInput2').value.trim().toLowerCase();
    
        rows1.forEach(row => {
            if (row === headerRow) return; // Skip header row
    
            // Get cells from the row
            const cells = row.querySelectorAll('td');
    
            // Check if at least one of the two specified columns contains the search term
            const column1Match = cells[2].textContent.toLowerCase().includes(searchTerm);
    
            if (column1Match) {
                tableBody.appendChild(row.cloneNode(true)); // Use cloneNode to copy row
            }
        });
    
        applyRowColors(); // Εφαρμογή χρωματισμού μετά την απόδοση του πλήρους πίνακα
    }
    
    function displayPagination() {
        const pagination = document.getElementById('pagination');
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
        const tableRows = document.querySelectorAll('#search_table_page_3 tbody tr:not(tr[id="title-table"])'); // Επιλέγουμε όλες τις γραμμές εκτός από την επικεφαλίδα
    
        tableRows.forEach((row, index) => {
            if (index % 2 === 0) {
                row.style.backgroundColor = 'rgba(211, 211, 211, 0.211)'; // Αλλάζουμε το χρώμα σε ανοιχτό γκρι για τις ζυγές γραμμές
            }
        });
    }
    
    function checkAndDisplayTable() {
        const searchInput = document.getElementById('searchInput');
        
        if (searchInput.value.trim() !== '') {
            // Display full table when search input is not empty
            const pagination = document.getElementById('pagination');
            searchInput.style.display = 'block';
            pagination.style.display = 'none';
            fullTable();
        } else {
            // Otherwise, display paginated table
            displayTable(currentPage);
            searchInput.style.display = 'block'; // Keep the search input visible
            const pagination = document.getElementById('pagination');
            pagination.style.display = 'block';
        }
    }

    function checkAndDisplayTable2() {
        const searchInput2 = document.getElementById('searchInput2');
        
        if (searchInput2.value.trim() !== '') {
            // Display full table when search input is not empty
            const pagination = document.getElementById('pagination');
            searchInput2.style.display = 'block';
            pagination.style.display = 'none';
            fullTable1();
        } else {
            // Otherwise, display paginated table
            displayTable(currentPage);
            searchInput2.style.display = 'block'; // Keep the search input visible
            const pagination = document.getElementById('pagination');
            pagination.style.display = 'block';
        }
    }


    function checkAndDisplayTable3() {
        const searchInput3 = document.getElementById('searchInput3');
        
        if (searchInput3.value.trim() !== '') {
            // Display full table when search input is not empty
            const pagination = document.getElementById('pagination');
            searchInput3.style.display = 'block';
            pagination.style.display = 'none';
            fullTable3();
        } else {
            // Otherwise, display paginated table
            displayTable(currentPage);
            searchInput3.style.display = 'block'; // Keep the search input visible
            const pagination = document.getElementById('pagination');
            pagination.style.display = 'block';
        }
    }
    
    
    
    // Add event listener to the search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', checkAndDisplayTable);

    const searchInput2 = document.getElementById('searchInput2');
    searchInput2.addEventListener('input', checkAndDisplayTable2);  

    const searchInput3 = document.getElementById('searchInput3');
    searchInput3.addEventListener('input', checkAndDisplayTable3);  

    // Initial table display based on search input
    checkAndDisplayTable();
