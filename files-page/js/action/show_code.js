// Παίρνει το στοιχείο select με το id "code"
const selectElement = document.getElementById("code");
// Παίρνει το στοιχείο που θα φορτωθεί το περιεχόμενο με το id "load"
const loadElement = document.getElementById("load");

// Προσθέτει έναν χειριστή γεγονότος για την αλλαγή επιλογής στο select στοιχείο
selectElement.addEventListener("change", function() {
  // Καλεί τη συνάρτηση update_code με την επιλεγμένη τιμή
  update_code(selectElement.value);
});

// Ασύγχρονη συνάρτηση για την ενημέρωση του περιεχομένου με βάση την επιλεγμένη τιμή
async function update_code(selectedValue) {
  // Ελέγχει αν η επιλεγμένη τιμή είναι "-"
  if (selectedValue === "-") {
    // Αν ναι, καθαρίζει το περιεχόμενο του loadElement
    loadElement.innerHTML = '<code> </code>';
  } else {
    // Διαφορετικά, προσπαθεί να φορτώσει το αρχείο
    try {
      // Κάνει fetch την επιλεγμένη τιμή (URL)
      const response = await fetch(selectedValue);
      // Παίρνει το κείμενο από την απόκριση
      const text = await response.text();
      // Ενημερώνει το loadElement με το περιεχόμενο του αρχείου, χρησιμοποιώντας escapeHtml για ασφαλή εμφάνιση
      loadElement.innerHTML = `<pre><code class="language-py">${escapeHtml(text)}</code></pre>`;
      // Εφαρμόζει Prism.js για το syntax highlighting στο νέο περιεχόμενο
      Prism.highlightAll(); 
    } catch (error) {
      // Αν υπάρξει σφάλμα κατά τη φόρτωση του αρχείου
      loadElement.innerHTML = 'Σφάλμα κατά τη φόρτωση του αρχείου.'; // Εμφανίζει μήνυμα σφάλματος
      console.error("Error fetching file:", error); // Καταγράφει το σφάλμα στην κονσόλα
    }
  }
}

// Συνάρτηση για την ασφάλεια του HTML
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;") // Αντικαθιστά το & με &amp;
    .replace(/</g, "&lt;") // Αντικαθιστά το < με &lt;
    .replace(/>/g, "&gt;") // Αντικαθιστά το > με &gt;
    .replace(/"/g, "&quot;") // Αντικαθιστά το " με &quot;
    .replace(/'/g, "&#039;"); // Αντικαθιστά το ' με &#039;
}
