 // Λάβετε όλα τα στοιχεία dropdown-toggle
    const dropdownToggles = document.querySelectorAll('.dropdown-item.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault(); // Αποφυγή του προεπιλεγμένου συνδέσμου

            // Λάβετε το επόμενο υπομενού
            const submenu = this.nextElementSibling;

            // Αν το υπομενού υπάρχει, εναλλαγή εμφάνισης
            if (submenu && submenu.classList.contains('dropdown-menu')) {
                submenu.classList.toggle('show'); // Προσθήκη ή αφαίρεση της κλάσης show
            }

            // Κλείσιμο όλων των άλλων υπομενού εκτός από το τρέχον
            dropdownToggles.forEach(otherToggle => {
                if (otherToggle !== toggle) {
                    const otherSubmenu = otherToggle.nextElementSibling;
                    if (otherSubmenu && otherSubmenu.classList.contains('dropdown-menu')) {
                        otherSubmenu.classList.remove('show'); // Αφαίρεση της κλάσης show
                    }
                }
            });
        });
    });

    // Κλείσιμο υπομενού όταν κάνετε κλικ οπουδήποτε αλλού
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown')) {
            dropdownToggles.forEach(toggle => {
                const submenu = toggle.nextElementSibling;
                if (submenu && submenu.classList.contains('dropdown-menu')) {
                    submenu.classList.remove('show'); // Αφαίρεση της κλάσης show
                }
            });
        }
    });
