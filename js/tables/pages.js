const itemsPerPage = 15;
let currentPage = 1;

const table1 = document.getElementById('table_page');
const rows1 = table1.querySelectorAll('tr');
const headerRow = table1.querySelector('thead #title-table');

function displayTable(page) {
    const start = (page - 1) * itemsPerPage + 1; // +1 to skip header row
    const end = start + itemsPerPage;
    const tableBody = document.querySelector('#table_page tbody');
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

    applyRowColors(); // Apply row colors after rendering the table
    displayPagination();
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
    const tableRows = document.querySelectorAll('#table_page tbody tr:not(tr[id="title-table"])'); // Select all rows except header

    tableRows.forEach((row, index) => {
        if (index % 2 === 0) {
            row.style.backgroundColor = 'rgba(211, 211, 211, 0.211)'; // Change color to light gray for even rows
        }
    });
}

// Initial table display
displayTable(currentPage);
