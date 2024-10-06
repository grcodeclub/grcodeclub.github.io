// Συνάρτηση για την ανακατεύθυνση στη σελίδα από το page-select
function redirectFromPageSelect() {
    const pageselect = document.getElementById('page-select');
    const pageSelectedValue = pageselect ? pageselect.value : null;
    if (pageSelectedValue) {
        window.location.href = pageSelectedValue;
    }
}

// Συνάρτηση για την ανακατεύθυνση στη σελίδα από το select-term
function redirectFromTermSelect() {
    const termselect = document.getElementById('select-term');
    const termSelectedValue = termselect ? termselect.value : null;
    if (termSelectedValue) {
        window.location.href = termSelectedValue;
    }
}

// Χρησιμοποιούμε διαφορετικές συναρτήσεις onchange για κάθε dropdown
document.getElementById('page-select').onchange = redirectFromPageSelect;
document.getElementById('select-term').onchange = redirectFromTermSelect;

// Συνδυασμένος κώδικας για το window.onload
window.onload = function() {
    const termselect = document.getElementById('select-term');
    const pageselect = document.getElementById('page-select');
    const currentUrl = window.location.href; // Παίρνουμε το τρέχον URL

    // Έλεγχος για το page-select
    if (pageselect) {
        if (currentUrl.startsWith('https://grcodeclub.gr/linux/terminal/')) {
            pageselect.value = 'https://grcodeclub.gr/linux/terminal/';
        } else {
            for (let option of pageselect.options) {
                if (option.value === currentUrl) {
                    pageselect.value = option.value;
                    break;
                }
            }
        }
        $('#page-select').select2(); // Εφαρμογή του select2 για το page-select
    }

    // Έλεγχος για το select-term
    if (termselect) {
        for (let termoption of termselect.options) {
            if (termoption.value === currentUrl) {
                termselect.value = termoption.value;
                break;
            }
        }
        $('#select-term').select2({ placeholder: "Αναζήτηση εντολής ή σετ εντολών ", allowClear: true }); // Εφαρμογή του select2 για το select-term
    }
};
