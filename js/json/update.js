  // Λειτουργία για την φόρτωση των δεδομένων JSON
  function loadJSON() {
    fetch('https://grcodeclub.gr/files-page/json/update.json')
        .then(response => response.json())
        .then(jsonData => {
            const uploadPageContainer = document.getElementById('uploadpage');
            uploadPageContainer.innerHTML = ''; // Καθαρισμός του περιεχομένου
            
            // Δημιουργία καρτών από τα δεδομένα
            jsonData.forEach(item => {
                const col = document.createElement('div');
                col.className = 'col-md-4 mb-4'; // Χρησιμοποιούμε Bootstrap columns
                
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <div class="card-header">${item.title}</div>
                    <div class="card-body">
                        <p class="card-text">${item.description}</p>
                        <a href="${item.link}" target="_blank" class="btn btn-dark">Προβολή σελίδας </a>
                    </div>
                `;
                col.appendChild(card);
                uploadPageContainer.appendChild(col);
            });
        })
        .catch(error => console.error('Σφάλμα κατά τη φόρτωση του JSON:', error));
}

// Φόρτωση αρχικών δεδομένων JSON
loadJSON();
