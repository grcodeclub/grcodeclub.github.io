const itemsPerPage = 15;
let currentPage = 1;

const table1 = document.getElementById('search_table_page');
const rows1 = table1.querySelectorAll('tr');
const headerRow = table1.querySelector('#title-table');

function displayTable(page) {
    const start = (page - 1) * itemsPerPage + 1; // +1 to skip header row
    const end = start + itemsPerPage;
    const tableBody = document.querySelector('#search_table_page tbody');
    tableBody.innerHTML = '';

    // Add header row
    if (headerRow) {
        tableBody.appendChild(headerRow.cloneNode(true)); // Use cloneNode to keep original header
    }

    // Check if there are rows to display
    if (rows1.length <= 1) {
        const noResultsRow = document.createElement('tr');
        const noResultsCell = document.createElement('td');
        noResultsCell.colSpan = headerRow.cells.length; // Να καλύπτει όλες τις στήλες
        noResultsCell.textContent = "Δεν υπάρχουν διαθέσιμες εγγραφές.";
        noResultsRow.appendChild(noResultsCell);
        tableBody.appendChild(noResultsRow);
        return;
    }

    // Paginate rows, skipping the header row
    const paginatedItems = Array.from(rows1).slice(start, end);
    paginatedItems.forEach(row => {
        if (row !== headerRow) {
            tableBody.appendChild(row.cloneNode(true)); // Use cloneNode to copy row
        }
    });

    applyRowColors(); // Εφαρμογή χρωματισμού μετά την απόδοση του πίνακα
    displayPagination();
}

function fullTable() {
    const tableBody = document.querySelector('#search_table_page tbody');
    tableBody.innerHTML = '';

    // Add header row
    if (headerRow) {
        tableBody.appendChild(headerRow.cloneNode(true)); // Use cloneNode to keep original header
    }

    // Hide pagination
    const pagination = document.getElementById('pagination');
    pagination.style.display = 'none';

    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    const selectedCategory = document.getElementById('selectOption').value;

    let foundResults = false; // Flag για το αν βρέθηκαν αποτελέσματα

    rows1.forEach(row => {
        if (row === headerRow) return; // Skip header row

        const cells = row.querySelectorAll('td');
        if (cells.length === 0) return;

        // 🔍 Αναζήτηση μόνο στη στήλη 0
        const searchCell = cells[0];
        const searchMatch =
            searchTerm === '' ||
            (searchCell && searchCell.textContent.toLowerCase().includes(searchTerm));

        // 🧩 Φίλτρο (όπως πριν)
        const categoryMatch =
            selectedCategory === '0' ||
            selectedCategory === cells[0].getAttribute('aria-label');

        // ✅ Εμφάνιση γραμμών που ταιριάζουν και στα δύο
        if (categoryMatch && searchMatch) {
            tableBody.appendChild(row.cloneNode(true)); // Use cloneNode to copy row
            foundResults = true;
        }
    });

    // 🛑 Αν δεν υπάρχουν αποτελέσματα
    if (!foundResults) {
        const noResultsRow = document.createElement('tr');
        const noResultsCell = document.createElement('td');
        noResultsCell.colSpan = headerRow.cells.length;
        noResultsCell.textContent = "Δεν βρέθηκαν αποτελέσματα";
        noResultsRow.appendChild(noResultsCell);
        tableBody.appendChild(noResultsRow);
    }

    applyRowColors();
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

    // Create a ul for pagination
    const ul = document.createElement('ul');
    ul.className = 'pagination';

    // Previous button
    if (currentPage > 1) {
        const prevButton = document.createElement('li');
        prevButton.className = 'page-item';
        const prevLink = document.createElement('a');
        prevLink.className = 'page-link';
        prevLink.textContent = 'Προηγούμενη';
        prevLink.href = '#';

        prevLink.addEventListener('click', (event) => {
            event.preventDefault();
            currentPage--;
            displayTable(currentPage);
        });

        prevButton.appendChild(prevLink);
        ul.appendChild(prevButton);
    }

    for (let i = startPage; i <= endPage; i++) {
        const button = document.createElement('li');
        button.className = `page-item ${i === currentPage ? 'active' : ''}`;
        const link = document.createElement('a');
        link.className = 'page-link';
        link.textContent = i;
        link.href = '#';

        link.addEventListener('click', (event) => {
            event.preventDefault();
            currentPage = i;
            displayTable(currentPage);
        });

        button.appendChild(link);
        ul.appendChild(button);
    }

    // Next button
    if (currentPage < totalPages) {
        const nextButton = document.createElement('li');
        nextButton.className = 'page-item1';
        const nextLink = document.createElement('a');
        nextLink.className = 'page-link';
        nextLink.textContent = 'Επόμενη';
        nextLink.href = '#';

        nextLink.addEventListener('click', (event) => {
            event.preventDefault();
            currentPage++;
            displayTable(currentPage);
        });

        nextButton.appendChild(nextLink);
        ul.appendChild(nextButton);
    }

    // Append the ul to the pagination container
    pagination.appendChild(ul);
}



function applyRowColors() {
    const tableRows = document.querySelectorAll('#search_table_page tbody tr:not(tr[id="title-table"])'); // Επιλέγουμε όλες τις γραμμές εκτός από την επικεφαλίδα

    tableRows.forEach((row, index) => {
        if (index % 2 === 0) {
            row.style.backgroundColor = 'rgba(211, 211, 211, 0.211)'; // Αλλάζουμε το χρώμα σε ανοιχτό γκρι για τις ζυγές γραμμές
        }
    });
}

function checkAndDisplayTable() {
    const searchInput = document.getElementById('searchInput');
    const selectedCategory = document.getElementById('selectOption').value;

    if (searchInput.value.trim() !== '' || (selectedCategory !== '0')) {
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




// Add event listener to the search input
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', checkAndDisplayTable);

// Add event listener to the category select
const categorySelect = document.getElementById('selectOption');
categorySelect.addEventListener('change', checkAndDisplayTable);

// Initial table display based on search input and categories
checkAndDisplayTable();
