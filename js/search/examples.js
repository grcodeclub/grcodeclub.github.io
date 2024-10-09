const repoList = document.getElementById('repo-list');
const repoDetails = document.getElementById('repo-details');
const repoName = document.getElementById('repo-name');
const repoDescription = document.getElementById('repo-description');
const searchInput = document.getElementById('search-input');
const fileList = document.getElementById('file-list');

let currentRepo = null; // Αποθήκευση του τρέχοντος αποθετηρίου
let repoStack = []; // Στοίβα για τα αποθετήρια της ιεραρχίας

function displayRepos(reposToDisplay) {
    repoList.innerHTML = ''; // Άδειασμα της λίστας
    reposToDisplay.forEach(repo => {
        const listItem = document.createElement('li');
        listItem.id = repo.name; // Ορισμός του id ως το όνομα του repo
        listItem.className = 'repo'; // Προσθήκη της κλάσης repo
        
        // Δημιουργία του εικονιδίου φακέλου
        const folderIcon = document.createElement('i');
        folderIcon.className = 'fas fa-folder'; // Προσθήκη της κλάσης του φακέλου
        folderIcon.style.marginRight = '5px'; // Προσθήκη κενών δεξιά από το εικονίδιο
        listItem.appendChild(folderIcon); // Προσθήκη του εικονιδίου στο στοιχείο λίστας

        listItem.appendChild(document.createTextNode(`${repo.name}`)); // Προσθήκη του κειμένου
        
        listItem.onclick = () => showRepoDetails(repo);
        repoList.appendChild(listItem);
    });
}

// Αρχική εμφάνιση όλων των αποθετηρίων
displayRepos(repos);

// Νέα λειτουργία για αναζήτηση αρχείων
function searchFiles() {
    const searchTerm = searchInput.value.toLowerCase(); // Πάρε την αναζήτηση από το πεδίο
    if (currentRepo) {
        // Εάν έχουμε τρέχον αποθετήριο, κάνουμε αναζήτηση στα αρχεία του
        const filesToDisplay = currentRepo.files.filter(file => 
            file.name.toLowerCase().includes(searchTerm) // Έλεγχος αν το όνομα του αρχείου περιέχει την αναζήτηση
        );
        displayFiles(filesToDisplay); // Κλήση για να εμφανίσει τα αρχεία που ταιριάζουν

        // Ελέγχουμε αν υπάρχουν υπο-αποθετήρια και αναζητούμε και σε αυτά
        const subReposToDisplay = currentRepo.subRepos.filter(subRepo => 
            subRepo.name.toLowerCase().includes(searchTerm) || 
            subRepo.description.toLowerCase().includes(searchTerm) // Έλεγχος περιγραφών υπο-αποθετηρίων
        );
        displaySubRepos(subReposToDisplay); // Κλήση για να εμφανίσει τα υπο-αποθετήρια που ταιριάζουν
    } else {
        // Αν δεν υπάρχει τρέχον αποθετήριο, κάνουμε αναζήτηση στα αποθετήρια
        const reposToDisplay = repos.filter(repo => 
            repo.name.toLowerCase().includes(searchTerm) || 
            repo.description.toLowerCase().includes(searchTerm) // Έλεγχος περιγραφών
        );
        displayRepos(reposToDisplay); // Κλήση για να εμφανίσει τα αποθετήρια που ταιριάζουν
    }
}

// Λειτουργία για να εμφανίσει τα αρχεία
function displayFiles(files) {
    fileList.innerHTML = ''; // Άδειασμα της λίστας των αρχείων
    files.forEach(file => {
        const fileItem = document.createElement('li');
        fileItem.id = file.name; // Ορισμός του id ως το όνομα του αρχείου
        fileItem.className = 'repo'; // Προσθήκη της κλάσης repo

        // Δημιουργία του στοιχείου anchor (link)
        const fileLink = document.createElement('a');
        fileLink.href = `files/${file.link}`; // URL του αρχείου
        fileLink.innerHTML = `<i class="fas fa-code"></i> ${file.name}`;
        fileLink.target = '_blank'; // Άνοιγμα σε νέα καρτέλα
        fileLink.className = 'repo'; // Προσθήκη της κλάσης repo

        // Προσθήκη του anchor στο list item
        fileItem.appendChild(fileLink);
        fileList.appendChild(fileItem);
    });
}

// Λειτουργία για να εμφανίσει τα υπο-αποθετήρια
function displaySubRepos(subRepos) {
    subRepos.forEach(subRepo => {
        const subRepoItem = document.createElement('li');
        subRepoItem.id = subRepo.name; // Ορισμός του id ως το όνομα του υπο-αποθετηρίου
        subRepoItem.className = 'repo'; // Προσθήκη της κλάσης repo
        subRepoItem.innerHTML = `<i class="fas fa-folder"></i> ${subRepo.name}`; 
        subRepoItem.onclick = () => showSubRepoDetails(subRepo); // Κλήση για εμφάνιση λεπτομερειών
        fileList.appendChild(subRepoItem); // Προσθήκη υπο-αποθετηρίου στην ίδια λίστα
    });
}

// Λειτουργία για να εμφανίσει τις λεπτομέρειες του υπο-αποθετηρίου
function showSubRepoDetails(subRepo) {
    repoStack.push(currentRepo); // Προσθήκη του τρέχοντος αποθετηρίου στη στοίβα
    currentRepo = subRepo; // Αποθήκευση του τρέχοντος υπο-αποθετηρίου
    repoList.style.display = 'none'; // Απόκρυψη της λίστας
    repoDetails.style.display = 'block'; // Εμφάνιση των λεπτομερειών
    repoName.textContent = subRepo.name; // Τίτλος υπο-αποθετηρίου
    repoDescription.textContent = subRepo.description; // Περιγραφή υπο-αποθετηρίου

    // Εμφάνιση των αρχείων του υπο-αποθετηρίου
    displayFiles(subRepo.files); // Εμφάνιση αρχείων υπο-αποθετηρίου

    // Καθαρισμός του πεδίου αναζήτησης
    searchInput.value = '';
    searchInput.focus(); // Εστίαση στο πεδίο αναζήτησης
}

// Λειτουργία για να εμφανίσει τις λεπτομέρειες του repository
function showRepoDetails(repo) {
    // Ελέγξτε αν το τρέχον αποθετήριο είναι διαφορετικό από το προηγούμενο
    if (currentRepo && currentRepo.name !== repo.name) {
        repoStack.push(currentRepo); // Προσθήκη του τρέχοντος αποθετηρίου στη στοίβα μόνο αν είναι διαφορετικό
    }

    currentRepo = repo; // Αποθήκευση του τρέχοντος αποθετηρίου
    repoList.style.display = 'none'; // Απόκρυψη της λίστας
    repoDetails.style.display = 'block'; // Εμφάνιση των λεπτομερειών
    repoName.textContent = repo.name;
    repoDescription.textContent = repo.description;

    // Εμφάνιση των αρχείων του κύριου αποθετηρίου
    displayFiles(repo.files); // Εμφάνιση αρχείων του κύριου αποθετηρίου

    // Εμφάνιση υπο-αποθετηρίων μόνο αν υπάρχουν
    if (repo.subRepos && repo.subRepos.length > 0) {
        displaySubRepos(repo.subRepos); // Εμφάνιση υπο-αποθετηρίων
    }
}

// Λειτουργία επιστροφής
function goBack() {
    // Έλεγξε αν υπάρχει κάποιο στοιχείο στη στοίβα για επιστροφή
    if (repoStack.length > 0) {
        currentRepo = repoStack.pop(); // Αφαίρεση του τελευταίου αποθετηρίου από τη στοίβα
        console.log('Current stack after goBack:', repoStack.map(r => r.name)); // Εκτύπωση της στοίβας μετά την επιστροφή

        // Επιστροφή στο προηγούμενο αποθετήριο που ήταν πριν το sub-repo
        showRepoDetails(currentRepo); // Εμφάνιση του γονικού αποθετηρίου

    } else {
        // Αν η στοίβα είναι άδεια, εμφάνιση της αρχικής λίστας αποθετηρίων (root)
        repoDetails.style.display = 'none'; // Απόκρυψη των λεπτομερειών
        repoList.style.display = 'block'; // Εμφάνιση της λίστας αποθετηρίων
        currentRepo = null; // Επαναφορά του τρέχοντος αποθετηρίου
        console.log('Stack is empty, returning to root'); // Εκτύπωση όταν η στοίβα είναι κενή
    }
}

// Προσθήκη ακροατή για το πεδίο αναζήτησης
searchInput.addEventListener('input', searchFiles); // Κλήση της searchFiles κατά την πληκτρολόγηση
