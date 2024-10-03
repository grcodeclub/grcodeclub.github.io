            // Δημιουργία του iframe για το noscript
            var noscript = document.createElement('noscript');
            var iframe = document.createElement('iframe');
            iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-MMLRVK48';
            iframe.height = '0';
            iframe.width = '0';
            iframe.style.display = 'none';
            iframe.style.visibility = 'hidden';
            noscript.appendChild(iframe);
            // Εισαγωγή του noscript αμέσως μετά το άνοιγμα του <body>
            var body = document.body;
            if (body) {
                body.insertBefore(noscript, body.firstChild);
            }


const htmlContent = `
 <div id="cookie-banner" style="display: none;">
    <p>Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας στην ιστοσελίδα μας. Επιλέξτε αν θέλετε να αποδεχτείτε ή να απορρίψετε όλα τα cookies:</p>
    <label><input type="checkbox" id="cookies-ga4" checked disabled>Ανάλυση και Παρακολούθηση</label><br>
    <label><input type="checkbox" id="cookies-social" checked>Social Media</label>
    <br>
    <button id="accept-cookies">Αποδοχή</button>
    <button id="reject-cookies">Απόρριψη</button>
</div>
    <nav class="navbar navbar-expand-lg custom-navbar">

     <a class="navbar-brand" href="index.html">
            <img src="https://grcodeclub.gr/files-page/logo/logo-head.png" alt="Το Λογότυπό μας" width="150" height="60" class="d-inline-block align-top">
        </a>        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon">
                <div></div> <!-- Αυτή είναι η κεντρική γραμμή -->
            </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Προγραμματισμός</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown" style="max-height: 400px;">
                        <a class="dropdown-item" href="service1.html">C</a>
                        <a class="dropdown-item" href="service2.html">Python</a>
                        <a class="dropdown-item" href="popular1.html">C++</a>
                        <a class="dropdown-item" href="popular2.html">Java</a>
                        <a class="dropdown-item" href="popular2.html">Php</a>
                        <a class="dropdown-item" href="popular2.html">Html</a>
                        <a class="dropdown-item" href="popular2.html">CSS</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" >Δίκτυα Υπολογιστών</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle"  id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Λειτουργικά Συστήματα</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="service1.html">Microsoft Windows</a>
                        <a class="dropdown-item" href="service2.html">Linux</a>
                    </div>
                </li>
                <li class="nav-item"></li>
                    <a class="nav-link" >Kυβερνοασφάλεια</a>
                </li>

            <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ορολογία</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown" style="max-height: 400px;">
                        <a class="dropdown-item" href="https://grcodeclub.gr/orologia/">Γενικά</a>
                    </div>
                </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Επιπλέον</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown" style="max-height: 400px;">
                        <a class="nav-link" >Edit - Image</a>
                    </div>
                </li>
            </ul>
        </div>
        </nav>

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

// Εύρεση του στόχου με το id 'add_headder'
const addHeadderDiv = document.getElementById('addHeader');

// Προσθήκη του HTML περιεχομένου στο div με το id 'add_headder'
if (addHeadderDiv) {addHeadderDiv.innerHTML = htmlContent;}
