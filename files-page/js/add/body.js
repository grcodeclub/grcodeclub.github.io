const htmlContentHeader = `
<nav class="navbar navbar-expand-lg custom-navbar fixed-top" id="mymenu">
    <a class="navbar-brand" href="https://grcodeclub.gr">
        <img src="https://grcodeclub.gr/files-page/logo/logo-head.webp" alt="Το Λογότυπό μας" width="165" height="70" class="d-inline-block align-top">
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
                <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Developer</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style="max-height: 400px; overflow-y: auto;">
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/developer/">Προγραμματισμός</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/developer/languages/">Γλώσσες Προγραμματισμού</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/developer/languages/c/">C</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/developer/languages/python/">Python</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/developer/languages/cpp/">C++</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/developer/languages/java/">Java</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/developer/languages/sql">SQL</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/developer/languages/docker">Docker</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/developer/languages/matlab">MATLAB</a></li>
                </ul>
            </li>
            
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown6" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Web Development</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown6" style="max-height: 400px; overflow-y: auto;">
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/web-developer/build/">Ανάπτυξη Ιστοσελίδων</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/web-developer/php/">Php</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/web-developer/html/">Html</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/web-developer/css/">CSS</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/web-developer/javascript/">JavaScript</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/web-developer/more/uploadsite">Upload Website</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/web-developer/more/seo">SEO</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/web-developer/cms/wordpress/">WordPress</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/web-developer/more/http/">HTTP</a></li>
                </ul>
            </li> 
             
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Δίκτυα Υπολογιστών</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/network/">Βασικές γνώσεις</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/network/roadmap">Roadmap</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/network/tcp-ip">Μοντέλο TCP/IP</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/network/protocol/">Πρωτόκολλα</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/network/more/list/services-port">Υπηρεσίες και Ports</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/network/more/list/application-and-protocols">Εφαρμογή και Πρωτόκολλο</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/network/cloud/">Cloud</a></li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Λειτουργικά Συστήματα</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown3">
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/operating-systems/">Λειτουργικό Σύστημα</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/operating-systems/extensions">Επεκτάσεις Αρχείων</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/operating-systems/microsoft-windows/">Microsoft Windows</a></li>
                     <li><a class="dropdown-item" href="https://grcodeclub.gr/operating-systems/linux/">Linux</a></li>            
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Kυβερνοασφάλεια</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown4" style="max-height: 400px; overflow-y: auto;">
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/cybersecurity">Kυβερνοασφάλεια</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/cybersecurity/tools">Εργαλεία</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/cybersecurity/attacks">Επιθέσεις</a></li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown5" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Υλικό Υπολογιστών</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown5" style="max-height: 400px; overflow-y: auto;">
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/hardware/cables/">Τύποι καλωδίων</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/hardware/code-resistors">Χρωματικός Κώδικας Αντιστάσεων</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/hardware/pc-builder">PC Builder</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/hardware/electronics">Μαθηματικοί τύποι</a></li>
                </ul>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown6" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Κινητά</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown6" style="max-height: 400px; overflow-y: auto;">
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/mobile/android/">Android</a></li>
                </ul>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown7" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Περισσότερα</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown7" style="max-height: 400px; overflow-y: auto;">
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/more/">Δημοσιεύσεις</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/more/tools">Online Εργαλεία</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/more/social-media">Social Media</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/orologia/">Ορολογία</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/syntomografies">Συντομογραφίες</a></li>
                    <li><a class="dropdown-item" href="https://grcodeclub.gr/more/info">Πληροφορίες</a></li>
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
                        <a href="https://www.youtube.com/@codeclub-gr" target="_blank" class="text-dark" title="YouTube">
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
            GrCode Club by <a  style="color:black; text-decoration: none;" href="https://dimitridedou.github.io/">@dimitridedou</a>
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
