  // Λειτουργία για την φόρτωση των δεδομένων JSON
  function loadJSON() {
    fetch('https://grcodeclub.gr/files-page/json/news.json')
        .then(response => response.json())
        .then(jsonData => {
            const uploadPageContainer = document.getElementById('uploadpage');
            uploadPageContainer.innerHTML = ''; // Καθαρισμός του περιεχομένου
            
            // Δημιουργία καρτών από τα δεδομένα
            jsonData.forEach(item => {
                const col = document.createElement('div');
                col.className = 'col'; // Χρησιμοποιούμε Bootstrap columns
                
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <div class="card-header">${item.title}</div>
                    <div class="card-body">
                        <p class="card-text">${item.description}</p>
                    </div>
                    <div class="card-footer"><small class="text-muted">${item.date}</div>
                `;
                col.appendChild(card);
                uploadPageContainer.appendChild(col);
            });
        })
        .catch(error => console.error('Σφάλμα κατά τη φόρτωση του JSON:', error));
}

// Φόρτωση αρχικών δεδομένων JSON
loadJSON();
