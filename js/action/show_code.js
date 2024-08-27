const selectElement = document.getElementById("code");
selectElement.addEventListener("change", function() {
    update_code(selectElement.value);
});

const loadElement = document.getElementById("load");

function update_code(selectedValue) {
    if (selectedValue === "-") {
        loadElement.innerHTML = '';
    } else {
        loadElement.innerHTML = `<pre data-src="${selectedValue}"></pre>`;
        Prism.highlightAll();
    }
}
