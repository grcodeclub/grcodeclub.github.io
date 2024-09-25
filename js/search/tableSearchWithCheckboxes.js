function getSelectedCategories() {
    return Array.from(document.querySelectorAll('.category-checkbox:checked')).map(cb => cb.value);
}

function updateTableBasedOnCheckboxes() {
    const selectedCategories = getSelectedCategories();
    const searchInput = document.getElementById('searchInput');
    const hasSearchTerm = searchInput.value.trim() !== '';

    // Εμφάνιση του πλήρους πίνακα αν υπάρχουν επιλεγμένες κατηγορίες ή όρος αναζήτησης
    if (hasSearchTerm || selectedCategories.length > 0) {
        const pagination = document.getElementById('pagination');
        searchInput.style.display = 'block';
        pagination.style.display = 'none';
        fullTable();
    } else {
        // Διαφορετικά, εμφάνιση του σελιδοποιημένου πίνακα
        displayTable(currentPage);
        searchInput.style.display = 'block'; // Διατήρηση του search input ορατού
        const pagination = document.getElementById('pagination');
        pagination.style.display = 'block';
    }
}

// Add event listeners to the category checkboxes
const categoryCheckboxes = document.querySelectorAll('.category-checkbox');
categoryCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateTableBasedOnCheckboxes);
});

// Call this function to initialize the table based on selected categories at the start
updateTableBasedOnCheckboxes();
