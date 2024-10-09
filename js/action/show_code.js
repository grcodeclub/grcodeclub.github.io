const selectElement = document.getElementById("page-select");
const loadElement = document.getElementById("load");
selectElement.addEventListener("change", function() {
  update_page-select(selectElement.value);
});                  
async function update_page-select(selectedValue) {
if (selectedValue === "-") {
  loadElement.innerHTML = '<page-select> </page-select>';
} else {
  try {
   const response = await fetch(selectedValue);
   const text = await response.text();
   loadElement.innerHTML = `<pre><page-select class="language-py">${escapeHtml(text)}</page-select></pre>`;
   Prism.highlightAll(); // Εφαρμόστε Prism.js στο νέο περιεχόμενο
  } catch (error) {
    loadElement.innerHTML = 'Σφάλμα κατά τη φόρτωση του αρχείου.';
    console.error("Error fetching file:", error);
    }
  }
}
function escapeHtml(unsafe) {
  return unsafe
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#039;");
}
