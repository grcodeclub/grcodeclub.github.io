const htmlContentHeader = `
<nav class="navbar navbar-expand-lg custom-navbar fixed-top" id="mymenu">
    <div class="container-fluid d-flex justify-content-between">
        <!-- Κουμπί Mobile Menu στα αριστερά -->
        <button class="navbar-toggler order-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" id="btnmenu_mobile">
            <span>
                <svg class="hamburger-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30">
                    <path stroke="currentColor" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"/>
                </svg>
                <svg class="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30">
                    <path stroke="currentColor" stroke-width="2" d="M6 6l18 18M6 24L24 6"/>
                </svg>
            </span>
        </button>

        <!-- Λογότυπο στο κέντρο -->
        <a class="navbar-brand mx-auto" href="https://grcodeclub.gr">
            <img src="https://grcodeclub.gr/files-page/logo/logo-head.webp" alt="Το Λογότυπό μας" width="224" height="90" class="d-inline-block align-top">
        </a>

        <!-- Το πραγματικό μενού -->
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto"> <!-- ms-auto για να πάνε δεξιά -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Προγραμματισμός</a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="https://grcodeclub.gr/programming/languages/">Γλώσσες Προγραμματισμού</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
`;

const addHeaderDiv = document.getElementById('addHeader'); // Εύρεση του στόχου με το id 'addHeader'

if (addHeaderDiv) {addHeaderDiv.innerHTML = htmlContentHeader;} // Προσθήκη του HTML περιεχομένου στο div με το id 'addHeader

// Περιεχόμενο footer
const htmlContentFooter = `
    <footer class="text-center text-lg-start mt-5">
        <div class="container p-4">
            <section class="mb-4">
                <h5 class="text-uppercase text-center">Social Media</h5>
                <ul class="list-inline d-flex justify-content-center">
                    <li class="list-inline-item">
                        <a href="https://www.facebook.com/grcodeclub" target="_blank" class="text-dark" title="Facebook">
                            <i class="fab fa-facebook fa-2x"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://www.youtube.com/@grcodeclub" target="_blank" class="text-dark" title="YouTube">
                            <i class="fab fa-youtube fa-2x"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://www.instagram.com/grcode.club" target="_blank" class="text-dark" title="Instagram">
                            <i class="fab fa-instagram fa-2x"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://github.com/GrCodeClub" target="_blank" class="text-dark" title="GitHub">
                            <i class="fab fa-github fa-2x"></i>
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.1);">
            &copy; 2024 Gr Code Club. All Rights Reserved.
        </div>
    </footer>
`;

// Εύρεση του στόχου με το id 'addFooter'
const addFooterDiv = document.getElementById('addFooter');

// Προσθήκη του HTML περιεχομένου στο div με το id 'addFooter'
if (addFooterDiv) {addFooterDiv.innerHTML = htmlContentFooter;}
        // Εναλλαγή μεταξύ hamburger και close icon με βάση το άνοιγμα του μενού
        document.querySelector('.navbar-toggler').addEventListener('click', function() {
            this.classList.toggle('open');
        });


