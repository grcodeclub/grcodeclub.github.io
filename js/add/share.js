const addFooter = document.getElementsByClassName('Text');
const htmlContent = `<button onclick="copyRealUrl()">Share</button>`;

// Προσθέτουμε το νέο περιεχόμενο στην αρχή του υπάρχοντος
addFooter.innerHTML = htmlContent + addFooter.innerHTML;
