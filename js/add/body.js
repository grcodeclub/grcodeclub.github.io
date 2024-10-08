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
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" id="btnmenu_mobile">
        <span>
            <!-- Hamburger SVG Icon -->
            <svg class="hamburger-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30">
                <path stroke="currentColor" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"/>
            </svg>
            <!-- Close SVG Icon -->
            <svg class="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30">
                <path stroke="currentColor" stroke-width="2" d="M6 6l18 18M6 24L24 6"/>
            </svg>
        </span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Προγραμματισμός</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style="max-height: 400px; overflow-y: auto;">
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/programming/languages/">Γλώσσες Προγραμματισμού</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/website/">Ανάπτυξη Ιστοσελίδων</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/c/">C</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/python/">Python</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/cpp/">C++</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/java/">Java</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/php/">Php</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/website/html/">Html</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/website/css/">CSS</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/javascript/">JavaScript</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/programming/languages/sql">SQL</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/programming/languages/docker">Docker</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/programming/languages/matlab">MATLAB</a></li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown7" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Δίκτυα Υπολογιστών</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown7">
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/network/">Περισσότερα</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/network/protocol/">Πρωτόκολλα</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/network/more/list/services-port">Υπηρεσίες και Ports</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/network/more/list/application-and-protocols">Εφαρμογή και Πρωτόκολλο</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/network/cloud/">Cloud</a></li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Λειτουργικά Συστήματα</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/system/">Λειτουργικό Σύστημα</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/windows/">Microsoft Windows</a></li>
                     <li><a class="dropdown-item" href="https://grcodeclub.gr/linux/">Linux</a></li>            
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown8" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Kυβερνοασφάλεια</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown8" style="max-height: 400px; overflow-y: auto;">
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/cybersecurity">Kυβερνοασφάλεια</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/cybersecurity/tools">Εργαλεία</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/cybersecurity/attacks">Επιθέσεις</a></li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Επιπλέο</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown3" style="max-height: 400px; overflow-y: auto;">
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/info/news">Eνημερώσεις</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/profile/">Προφίλ Ομάδας</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/orologia/">Ορολογία</a></li>
                </ul>
            </li>
        </ul>
    </div>
</nav>
`;

const addHeaderDiv = document.getElementById('addHeader'); // Εύρεση του στόχου με το id 'addHeader'

if (addHeaderDiv) {addHeaderDiv.innerHTML = htmlContentHeader;} // Προσθήκη του HTML περιεχομένου στο div με το id 'addHeader

// Περιεχόμενο footer
const htmlContentFooter = `
    <footer class="bg-light text-center text-lg-start mt-5">
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


