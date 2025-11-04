const searchInput = document.getElementById('searchInputContents');
const buttons = document.querySelectorAll('#buttonContainerContents a');

searchInput.addEventListener('keyup', function() {
  const filter = this.value.toLowerCase();
  
  buttons.forEach(btn => {
    const text = btn.textContent.toLowerCase();
    btn.style.display = text.includes(filter) ? 'inline-block' : 'none';
  });
});
