const itemsPerPage = 10;
let currentPage = 1;

const table1 = document.getElementById('search_table_page_3_input');
const rows1 = Array.from(table1.querySelectorAll('tr:not(#title-table)')); // Εξαιρούμε τη γραμμή τίτλου
const headerRow = table1.querySelector('#title-table');

function displayTable(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const rowsToDisplay = rows1.slice(start, end);

    // Καθαρισμός του πίνακα
    table1.innerHTML = '';

    // Προσθήκη της γραμμής τίτλου
    if (headerRow) {
        table1.appendChild(headerRow.cloneNode(true));
    }

    // Προσθήκη των γραμμών με βάση τη σελιδοποίηση
    rowsToDisplay.forEach(row => {
        table1.appendChild(row.cloneNode(true));
    });

    applyRowColors();
    displayPagination();
}

function displayPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    const totalPages = Math.ceil(rows1.length / itemsPerPage);
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
    const tableRows = table1.querySelectorAll('tr:not(#title-table)');
    tableRows.forEach((row, index) => {
        row.style.backgroundColor = index % 2 === 0 ? 'rgba(211, 211, 211, 0.211)' : '';
    });
}

function fullTable_searchInput(inputIndex) {
    const searchTerm = document.getElementById(`searchInput${inputIndex}`).value.trim().toLowerCase();
    table1.innerHTML = '';

    if (headerRow) {
        table1.appendChild(headerRow.cloneNode(true));
    }

    rows1.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells[inputIndex - 1].textContent.toLowerCase().includes(searchTerm)) {
            table1.appendChild(row.cloneNode(true));
        }
    });

    applyRowColors();
}

function checkAndDisplayTable_searchInput(inputIndex) {
    const searchInput = document.getElementById(`searchInput${inputIndex}`);
    const pagination = document.getElementById('pagination');

    if (searchInput.value.trim() !== '') {
        pagination.style.display = 'none';
        fullTable_searchInput(inputIndex);
    } else {
        pagination.style.display = 'block';
        displayTable(currentPage);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const searchInput1 = document.getElementById('searchInput1');
    const searchInput2 = document.getElementById('searchInput2');
    const searchInput3 = document.getElementById('searchInput3');

    searchInput1.addEventListener('input', () => checkAndDisplayTable_searchInput(1));
    searchInput2.addEventListener('input', () => checkAndDisplayTable_searchInput(2));
    searchInput3.addEventListener('input', () => checkAndDisplayTable_searchInput(3));

    displayTable(currentPage);
});
