// Περιμένουμε το DOM να φορτωθεί
document.addEventListener('DOMContentLoaded', function() {
    // Επιλέγουμε όλους τους πίνακες με την κλάση pricing-table
    const tables = document.querySelectorAll('.pricing-table');

    // Προσθέτουμε event listeners για κάθε πίνακα
    tables.forEach(table => {
        table.addEventListener('mouseover', function(event) {
            const cell = event.target;

            // Ελέγχουμε αν το στοιχείο είναι κελί (td ή th)
            // και αν δεν είναι στην πρώτη στήλη
            if (cell.tagName === 'TD' && cell.cellIndex > 0 && cell.parentElement.rowIndex > 0) {
                highlightRowAndColumn(cell, table);
            } else if (cell.tagName === 'TH' && cell.cellIndex > 0) {
                highlightRowAndColumn(cell, table);
            }
        });

        table.addEventListener('mouseout', function() {
            removeHighlight(table);
        });
    });

    // Λειτουργία για να χρωματίσει τη γραμμή και τη στήλη
    function highlightRowAndColumn(cell, table) {
        const row = cell.parentElement;
        const columnIndex = cell.cellIndex;

        // Χρωματίζουμε όλη τη γραμμή, εκτός από την πρώτη γραμμή
        for (let i = 0; i < row.cells.length; i++) {
            if (i > 0) {
                row.cells[i].classList.add('highlight'); // Χρωματίζουμε τα κελιά εκτός του πρώτου
            }
        }

        // Χρωματίζουμε όλα τα κελιά της στήλης, εκτός από την πρώτη γραμμή
        for (let i = 1; i < table.rows.length; i++) {
            if (table.rows[i].cells[columnIndex]) {
                table.rows[i].cells[columnIndex].classList.add('highlight'); // Χρωματίζουμε τη στήλη
            }
        }
    }

    // Αφαιρεί το χρώμα από τη γραμμή και τη στήλη
    function removeHighlight(table) {
        const highlighted = table.getElementsByClassName('highlight');

        // Αφαιρούμε το class από όλα τα στοιχεία που έχουν χρωματιστεί
        while (highlighted.length > 0) {
            highlighted[0].classList.remove('highlight');
        }
    }
});
