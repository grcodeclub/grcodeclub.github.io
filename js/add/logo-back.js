// Βρείτε το στοιχείο εικόνας χρησιμοποιώντας το κλάσμα (class)
const imgElement = document.querySelector('.logo_back');

// Ελέγξτε αν το στοιχείο βρέθηκε
if (imgElement) {
  // Ορίστε το src του στοιχείου εικόνας στη διεύθυνση URL που θέλετε
  imgElement.src = 'https://grcodeclub.github.io//files-page/graphics/back.png';
} else {
  console.log('Δεν βρέθηκε το στοιχείο εικόνας με το κλάσμα .logo_back');
}
