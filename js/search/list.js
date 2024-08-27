const searchInput = document.getElementById("searchInputList");
const lists = document.querySelectorAll(".list");

searchInput.addEventListener("input", function() {
  const searchValue = removeAccents(searchInput.value.toLowerCase());

  lists.forEach(function(list) {
    Array.from(list.getElementsByTagName("li")).forEach(function(item) {
      const itemText = removeAccents(item.textContent.toLowerCase());

      if (itemText.includes(searchValue)) {
        item.style.display = "block"; // Εμφάνιση στοιχείου
      } else {
        item.style.display = "none"; // Απόκρυψη στοιχείου
      }
    });
  });
});

function removeAccents(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
