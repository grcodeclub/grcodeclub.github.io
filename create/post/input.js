function addNewItem() {
    const newItem = document.createElement("div");
    newItem.classList.add("item");

    const selectedValue = document.getElementById("itemSelect").value;
    const selectElement = document.getElementById("itemSelect"); // Επιλογή του select

    if (selectedValue === "title") {
        newItem.innerHTML = `
            <h3 class="highlight"><input type="text" class="form-control unity" placeholder="Εισάγετε τίτλο Ενότητας"/></h3>
            <br><button onclick="removeItem(this)" class="btn btn-danger mb-5">Αφαίρεση</button> `;
    }else if (selectedValue === "unity") {
        newItem.innerHTML = `
            <input type="text" class="form-control unity" placeholder="Εισάγετε τίτλο Ενότητας">
            <br><button onclick="removeItem(this)" class="btn btn-danger mb-5 ">Αφαίρεση</button>`;
    } else if (selectedValue === "text") {
        newItem.innerHTML = `
            <textarea class="form-control content" rows="4" placeholder="Εισάγετε Κείμενο"></textarea>
            <br><button onclick="removeItem(this)" class="btn btn-danger mb-5">Αφαίρεση</button> `;
    } else if (selectedValue === "image") {
        newItem.innerHTML = `            
            <div class="input-group mb-3">
                <span class="input-group-text"><i class="fa fa-link fa-2x"></i></span>
                <input type="text" class="input-group-text image" id="imageInput" name="imageInput" placeholder="Εισάγετε URL Εικόνας">
                <br><button onclick="removeItem(this)" class="btn btn-danger mb-5">Αφαίρεση</button>
            </div>  `;
    }
    else if (selectedValue === "mycode") {
        newItem.innerHTML = `
            <textarea class="form-control mycode" rows="4" placeholder="Εισάγετε Κείμενο"></textarea>
            <br><button onclick="removeItem(this)" class="btn btn-danger mb-5 ">Αφαίρεση</button>`;
    }
    else if (selectedValue === "mycode_table" && !document.querySelector('.mytable')) {
        newItem.innerHTML = `
                <div class="row justify-content-center">
                    <div class="col-md-8">  
                        <div class="mb-3"> <textarea class="form-control mytable" rows="4" placeholder="Εισάγετε Table"></textarea> </div>
                        <div class="mb-3">
                            <label for="itemSelectTable" class="form-label">Επιλέξτε αριθμό στηλών:</label>
                            <select id="itemSelectTable" class="form-select" style="margin-left: 1%;">
                                <option value="2">Στήλες 2</option>
                                <option value="3">Στήλες 3</option>
                                <option value="4">Στήλες 4</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <br><button onclick="addRawHeader(this)" id="TableHeader" class="btn btn-primary">Add Raw Header</button>
                            <br><button onclick="addRaw(this)" id="table_raw" class="btn btn-secondary" disabled>Add Raw</button>
                        </div>
                        <br><button onclick="removeItem(this)" class="btn btn-danger mb-5">Αφαίρεση</button>
                    </div>
                </div>  `;
    }
    else if (selectedValue === "programming") {
        newItem.innerHTML = `
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="mb-3">
                        <label for="itemSelectLanguage" class="form-label">Επιλέξτε Γλώσσα Προγραμματισμού:</label>
                        <select id="itemSelectLanguage" class="form-select">
                            <option value="c">C</option>
                            <option value="cpp">C++</option>
                            <option value="python">Python</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <textarea class="form-control programming" rows="6" placeholder="Εισάγετε Κωδικά"></textarea>
                    </div>
                    <br><button onclick="removeItem(this)" class="btn btn-danger mb-5">Αφαίρεση</button>
                </div>
            </div>` ;}
    // Εύρεση του γονέα του select για να γίνει insert ακριβώς πάνω από το select
    const parentElement = selectElement.parentElement;
    parentElement.insertBefore(newItem, selectElement);
}

function removeItem(button) {
    const item = button.parentElement;
    item.remove();
}