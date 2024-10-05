 // Waiting for the DOM to load before executing the script
        // Select all dropdown toggles
        const dropdowns = document.querySelectorAll('.dropdown-toggle');

        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('click', function (event) {
                // Close all other dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        const parentDropdown = otherDropdown.closest('.nav-item.dropdown');
                        const menu = parentDropdown.querySelector('.dropdown-menu');
                        if (menu.classList.contains('show')) {
                            menu.classList.remove('show');
                            otherDropdown.setAttribute('aria-expanded', 'false');
                        }
                    }
                });

                // Toggle the clicked dropdown
                const parentDropdown = dropdown.closest('.nav-item.dropdown');
                const menu = parentDropdown.querySelector('.dropdown-menu');
                menu.classList.toggle('show');
                dropdown.setAttribute('aria-expanded', menu.classList.contains('show'));
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', function (event) {
            dropdowns.forEach(dropdown => {
                const parentDropdown = dropdown.closest('.nav-item.dropdown');
                const menu = parentDropdown.querySelector('.dropdown-menu');
                if (!parentDropdown.contains(event.target) && menu.classList.contains('show')) {
                    menu.classList.remove('show');
                    dropdown.setAttribute('aria-expanded', 'false');
                }
            });
        });
    
