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

    // Paginate rows, skipping the header row
    const paginatedItems = Array.from(rows1).slice(start, end);
    paginatedItems.forEach(row => {
        tableBody.appendChild(row.cloneNode(true)); // Use cloneNode to copy row
    });

    applyRowColors();
    displayPagination();
}

function fullTable() {
    const tableBody = document.querySelector('#search_table_page tbody');
    tableBody.innerHTML = '';

    // Add header row
    if (headerRow) {
        tableBody.appendChild(headerRow.cloneNode(true)); // Use cloneNode to keep original header
    }

    const searchTerm1 = document.getElementById('searchInput').value.trim().toLowerCase();
    const searchTerm2 = document.getElementById('searchInput2').value.trim().toLowerCase();
    
    const normalizedSearchTerm1 = searchTerm1.normalize('NFD').replace(/[̀-ͯ]/g, '');
    const normalizedSearchTerm2 = searchTerm2.normalize('NFD').replace(/[̀-ͯ]/g, '');

    rows1.forEach(row => {
        if (row === headerRow) return; // Skip header row

        const cells = row.querySelectorAll('td');
        let match = false;

        if (searchTerm1) {
            const column1Text = cells[0].textContent.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
            match = column1Text.includes(normalizedSearchTerm1);
        } 
        
        if (searchTerm2) {
            const column2Text = cells[1]?.textContent.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
            match = column2Text.includes(normalizedSearchTerm2);
        }

        if (match) {
            tableBody.appendChild(row.cloneNode(true));
        }
    });

    applyRowColors();
}

function displayPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil((rows1.length - 1) / itemsPerPage);
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

    const ul = document.createElement('ul');
    ul.className = 'pagination';

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

    if (currentPage < totalPages) {
        const nextButton = document.createElement('li');
        nextButton.className = 'page-item';
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

    pagination.appendChild(ul);
}

function applyRowColors() {
    const tableRows = document.querySelectorAll('#search_table_page tbody tr:not(tr[id="title-table"])');

    tableRows.forEach((row, index) => {
        if (index % 2 === 0) {
            row.style.backgroundColor = 'rgba(211, 211, 211, 0.211)';
        }
    });
}

function checkAndDisplayTable() {
    const searchInput = document.getElementById('searchInput');
    const searchInput2 = document.getElementById('searchInput2');
    
    if (searchInput.value.trim() !== '' || searchInput2.value.trim() !== '') {
        document.getElementById('pagination').style.display = 'none';
        fullTable();
    } else {
        displayTable(currentPage);
        document.getElementById('pagination').style.display = 'block';
    }
}

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', checkAndDisplayTable);

const searchInput2 = document.getElementById('searchInput2');
searchInput2.addEventListener('input', checkAndDisplayTable);

checkAndDisplayTable();
