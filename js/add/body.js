const htmlContentHeader = `
   <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MMLRVK48"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

    <div id="cookie-banner" style="display: none;">
        <p>Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας στην ιστοσελίδα μας. Επιλέξτε αν θέλετε να αποδεχτείτε ή να απορρίψετε όλα τα cookies:</p>
        <label><input type="checkbox" id="cookies-ga4" checked disabled>Ανάλυση και Παρακολούθηση</label><br>
        <label><input type="checkbox" id="cookies-social" checked>Social Media</label>
        <br>
        <button id="accept-cookies">Αποδοχή</button>
        <button id="reject-cookies">Απόρριψη</button>
    </div>
    <nav class="navbar navbar-expand-lg custom-navbar fixed-top" id="mymenu">

    <a class="navbar-brand" href="https://grcodeclub.gr">
        <img src="https://grcodeclub.gr/files-page/logo/logo-head.png" alt="Το Λογότυπό μας" width="150" height="60" class="d-inline-block align-top">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span>
            <!-- Hamburger SVG Icon -->
            <svg class="hamburger-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30">
                <path stroke="currentColor" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"/>
            </svg>
            <!-- Close SVG Icon -->
            <svg class="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30">
                <path stroke="currentColor" stroke-width="2" d="M6 6l18 18M6 24L24 6"/>
            </svg>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Προγραμματισμός</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown" style="max-height: 400px;">
                    <a class="dropdown-item" href="https://grcodeclub.gr/c/">C</a>
                    <a class="dropdown-item" href="https://grcodeclub.gr/python/">Python</a>
                    <a class="dropdown-item" href="https://grcodeclub.gr/cpp/">C++</a>
                    <a class="dropdown-item" href="https://grcodeclub.gr/java/">Java</a>
                    <a class="dropdown-item" href="https://grcodeclub.gr/php/">Php</a>
                    <a class="dropdown-item" href="https://grcodeclub.gr/website/html">Html</a>
                    <a class="dropdown-item" href="https://grcodeclub.gr/website/css">CSS</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://grcodeclub.gr/network">Δίκτυα Υπολογιστών</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Λειτουργικά Συστήματα</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown1">
                    <a class="dropdown-item" href="service1.html">Microsoft Windows</a>
                    <a class="dropdown-item" href="service2.html">Linux</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://grcodeclub.gr/cybersecurity">Kυβερνοασφάλεια</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Επιπλέον</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown3" style="max-height: 400px;">
                    <a class="nav-link" href="#">Edit - Image</a>
                     <a class="nav-link dropdown-toggle" id="navbarDropdown4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ορολογία</a>
                    <div class="dropdown-menu"  aria-labelledby="navbarDropdown4" id="submenu">
                       <a class="dropdown-item" href="https://grcodeclub.gr/orologia/">Γενικά</a>
                       <a class="dropdown-item" href="https://grcodeclub.gr/programming/orologia/">Προγραμματισμός</a>
                </div>
            </li>
        </ul>
    </div>
</nav>



`;

// Εύρεση του στόχου με το id 'addHeader'
const addHeaderDiv = document.getElementById('addHeader');

// Προσθήκη του HTML περιεχομένου στο div με το id 'addHeader'
if (addHeaderDiv) {addHeaderDiv.innerHTML = htmlContentHeader;}

// Περιεχόμενο footer
const htmlContentFooter = `
    <footer class="bg-light text-center text-lg-start mt-5">
        <div class="container p-4">
            <section class="mb-4">
                <h5 class="text-uppercase">Επικοινωνία</h5>
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
