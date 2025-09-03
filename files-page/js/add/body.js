const htmlContentHeader = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top">
  <div class="container">
    <!-- Λογότυπο -->
    <a class="navbar-brand fw-bold" href="https://grcodeclub.gr">
      <img src="https://grcodeclub.gr/files-page/logo/logo-head.webp" 
           alt="GrCode Club Logo" 
           width="140" 
           height="55" 
           class="d-inline-block align-middle me-2">
      GrCodeClub
    </a>

    <!-- Κουμπί Hamburger -->
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Μενού">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Links -->
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">

        <!-- Developer -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="devDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Developer
          </a>
          <ul class="dropdown-menu dropdown-menu-dark shadow" aria-labelledby="devDropdown">
            <li><a class="dropdown-item" href="https://grcodeclub.gr/developer/">Προγραμματισμός</a></li>
            <li><a class="dropdown-item" href="https://grcodeclub.gr/developer/languages/">Γλώσσες Προγραμματισμού</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="https://grcodeclub.gr/developer/languages/python/">Python</a></li>
            <li><a class="dropdown-item" href="https://grcodeclub.gr/developer/languages/cpp/">C++</a></li>
            <li><a class="dropdown-item" href="https://grcodeclub.gr/developer/languages/java/">Java</a></li>
          </ul>
        </li>

        <!-- Web Development -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="webDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Web Development
          </a>
          <ul class="dropdown-menu dropdown-menu-dark shadow" aria-labelledby="webDropdown">
            <li><a class="dropdown-item" href="https://grcodeclub.gr/web-developer/build/">Ανάπτυξη Ιστοσελίδων</a></li>
            <li><a class="dropdown-item" href="https://grcodeclub.gr/web-developer/html/">HTML</a></li>
            <li><a class="dropdown-item" href="https://grcodeclub.gr/web-developer/css/">CSS</a></li>
            <li><a class="dropdown-item" href="https://grcodeclub.gr/web-developer/javascript/">JavaScript</a></li>
          </ul>
        </li>

        <!-- Δίκτυα -->
        <li class="nav-item"><a class="nav-link" href="https://grcodeclub.gr/network/">Δίκτυα</a></li>
        <!-- Λειτουργικά -->
        <li class="nav-item"><a class="nav-link" href="https://grcodeclub.gr/operating-systems/">Λειτουργικά</a></li>
        <!-- Κυβερνοασφάλεια -->
        <li class="nav-item"><a class="nav-link" href="https://grcodeclub.gr/cybersecurity">Ασφάλεια</a></li>
        <!-- Περισσότερα -->
        <li class="nav-item"><a class="nav-link" href="https://grcodeclub.gr/more/">Περισσότερα</a></li>
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
