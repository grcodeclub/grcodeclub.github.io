const selectElement = document.getElementById("code");
selectElement.addEventListener("change", function() {
    document.getElementById("code1").value = '-';
    update_code(selectElement.value);
});

const selectElement1 = document.getElementById("code1");
selectElement1.addEventListener("change", function() {
    document.getElementById("code").value = '-';
    update_code(selectElement1.value);
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
