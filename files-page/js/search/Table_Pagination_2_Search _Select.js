const itemsPerPage = 15;
let currentPage = 1;

const table = document.getElementById('search_table_page_Select');
const headerRow = table.querySelector('#title_table_Select');
const allRows = Array.from(table.querySelectorAll('tr')).filter(row => row !== headerRow);

let filteredRows = [...allRows]; // Rows μετά το φιλτράρισμα

function displayTable(page) {
    const tableBody = table.querySelector('tbody');
    tableBody.innerHTML = '';
    if (headerRow) tableBody.appendChild(headerRow);

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const rowsToShow = filteredRows.slice(start, end);

    if (rowsToShow.length === 0) {
        const noRow = document.createElement('tr');
        const noCell = document.createElement('td');
        noCell.colSpan = headerRow.cells.length;
        noCell.textContent = "Δεν υπάρχουν διαθέσιμες εγγραφές.";
        noRow.appendChild(noCell);
        tableBody.appendChild(noRow);
        return;
    }

    rowsToShow.forEach(row => tableBody.appendChild(row));
    applyRowColors();
    displayPagination(filteredRows.length);
}

function applyFilters() {
    const searchTerm1 = document.getElementById('searchInput_Select').value.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    const searchTerm2 = document.getElementById('searchInput2_Select').value.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    const selectedCategory = document.getElementById('selectOption').value.trim().toLowerCase();

    filteredRows = allRows.filter(row => {
        const cells = row.querySelectorAll('td');
        const rowCategory = row.getAttribute('aria-label')?.trim().toLowerCase() || '';

        const categoryMatch = selectedCategory === '0' || rowCategory === selectedCategory;

        let searchMatch = true;
        if (searchTerm1) searchMatch = searchMatch && cells[0].textContent.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').includes(searchTerm1);
        if (searchTerm2) searchMatch = searchMatch && cells[1]?.textContent.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').includes(searchTerm2);

        return categoryMatch && searchMatch;
    });

    currentPage = 1;
    displayTable(currentPage);

    // Αν δεν υπάρχουν αποτελέσματα
    if (filteredRows.length === 0) {
        const tableBody = table.querySelector('tbody');
        tableBody.innerHTML = '';
        if (headerRow) tableBody.appendChild(headerRow);
        const noRow = document.createElement('tr');
        const noCell = document.createElement('td');
        noCell.colSpan = headerRow.cells.length;
        noCell.textContent = "Δεν βρέθηκαν αποτελέσματα";
        noRow.appendChild(noCell);
        tableBody.appendChild(noRow);
    }
}

function displayPagination(totalVisible) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    if (totalVisible <= itemsPerPage) return;

    const totalPages = Math.ceil(totalVisible / itemsPerPage);
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    startPage = Math.max(1, endPage - maxPagesToShow + 1);

    const ul = document.createElement('ul');
    ul.className = 'pagination';

    if (currentPage > 1) {
        const liPrev = document.createElement('li');
        liPrev.className = 'page-item';
        const aPrev = document.createElement('a');
        aPrev.className = 'page-link';
        aPrev.href = '#';
        aPrev.textContent = 'Προηγούμενη';
        aPrev.addEventListener('click', e => {
            e.preventDefault();
            currentPage--;
            displayTable(currentPage);
        });
        liPrev.appendChild(aPrev);
        ul.appendChild(liPrev);
    }

    for (let i = startPage; i <= endPage; i++) {
        const li = document.createElement('li');
        li.className = `page-item ${i === currentPage ? 'active' : ''}`;
        const a = document.createElement('a');
        a.className = 'page-link';
        a.href = '#';
        a.textContent = i;
        a.addEventListener('click', e => {
            e.preventDefault();
            currentPage = i;
            displayTable(currentPage);
        });
        li.appendChild(a);
        ul.appendChild(li);
    }

    if (currentPage < totalPages) {
        const liNext = document.createElement('li');
        liNext.className = 'page-item';
        const aNext = document.createElement('a');
        aNext.className = 'page-link';
        aNext.href = '#';
        aNext.textContent = 'Επόμενη';
        aNext.addEventListener('click', e => {
            e.preventDefault();
            currentPage++;
            displayTable(currentPage);
        });
        liNext.appendChild(aNext);
        ul.appendChild(liNext);
    }

    pagination.appendChild(ul);
}

function applyRowColors() {
    const tableRows = table.querySelectorAll('tbody tr:not(#title_table_Select)');
    tableRows.forEach((row, index) => {
        row.style.backgroundColor = index % 2 === 0 ? 'rgba(211, 211, 211, 0.211)' : '';
    });
}

// Event listeners
document.getElementById('searchInput_Select').addEventListener('input', applyFilters);
document.getElementById('searchInput2_Select').addEventListener('input', applyFilters);
document.getElementById('selectOption').addEventListener('change', applyFilters);

// Αρχική εμφάνιση
applyFilters();
