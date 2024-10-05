  $(document).ready(function () {
        // Όταν γίνεται κλικ σε ένα dropdown-toggle, άνοιξε/κλείσε το αντίστοιχο υπομενού
        $('.dropdown-item.dropdown-toggle').click(function (e) {
            e.preventDefault();
            const $submenu = $(this).next('.dropdown-menu');
            const $parentDropdown = $(this).closest('.dropdown-menu');

            // Κλείσιμο όλων των υπομενού εκτός του τρέχοντος
            $parentDropdown.find('.dropdown-menu').not($submenu).slideUp(300);

            // Εναλλαγή εμφάνισης του υπομενού
            $submenu.slideToggle(300);
        });
    });
