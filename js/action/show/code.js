                        const selectElement = document.getElementById("code");
                        const loadElement = document.getElementById("load");
                    
                        selectElement.addEventListener("change", function() {
                            update_code(selectElement.value);
                        });
                    
                        async function update_code(selectedValue) {
                            if (selectedValue === "-") {
                                loadElement.innerHTML = '<code> </code>';
                            } else {
                                try {
                                    const response = await fetch(selectedValue);
                                    const text = await response.text();
                                    loadElement.innerHTML = `<pre><code class="language-py">${escapeHtml(text)}</code></pre>`;
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
