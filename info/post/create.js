
function downloadHTML() {
    const htmlContent = generateFinalHTML(); // Καλεί τη συνάρτηση που παράγει το HTML
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'page.html'; // Όνομα αρχείου που θα κατέβει
    document.body.appendChild(link);
    link.click(); // Ξεκινά την λήψη
    document.body.removeChild(link); // Αφαιρεί το link από το DOM
}

function generateFinalHTML() {
    let htmlContent = 
`<!DOCTYPE html>
<html lang="el">
<head>
    <meta charset="UTF-8">
    <meta property="og:image" content="https://grcodeclub.gr/files-page/preview/main.jpg"/>
    <meta property="og:title" content="GrCode Club">
    <title>GrCode Club</title>
    <script src="https://grcodeclub.github.io/js/data.js"></script>
</head>
<body>
    <div id="addHeader"></div>
    <div class="container"></div>
    <div id="addFooter"></div>
</body>
</html>

`;

    // Δημιουργία περιεχομένου για το myhtmlContent
    const htmlContentArray = [];
    const items = document.querySelectorAll(".item");
    
    items.forEach(item => {
        const title = item.querySelector(".input_title");
        const content = item.querySelector(".content");
        const image = item.querySelector(".image");
        const unity = item.querySelector(".unity");
        const mycode = item.querySelector(".mycode");
        const mytable = item.querySelector(".mytable");
        const programming = item.querySelector(".programming");
        const selectedValue = document.getElementById("itemSelectLanguage");


        let itemHTML = "";

        // Έλεγχος για τίτλο
        if (title) {
            itemHTML += `<h1 class="title">${title.value}</h1>`;
        }

        // Έλεγχος για μονάδα (unity)
        if (unity) {
            itemHTML += `<h3 class="highlight">${unity.value}</h3>`;
        }
        
        if (selectedValue && programming) {
            // Αν υπάρχει το στοιχείο και έχει τιμή
            itemHTML += `
            <div class="bg_preview"><div class="line-numbers">
            <pre class="code_editor"><code class="language-${selectedValue.value}">${programming.value}</code></pre></div></div>`;
        } else {
            console.error("Το στοιχείο itemSelectLanguage δεν υπάρχει ή δεν έχει επιλεχθεί τιμή.");
        }

        // Έλεγχος για κείμενο
        if (content && content.value.trim() !== "") {
            itemHTML += `<p>${content.value}</p>`;
        }

          // Έλεγχος για κείμενο
          if (mycode && mycode.value.trim() !== "") {
            itemHTML += `<div>${mycode.value}</div>`;
        }
        
        
        // Έλεγχος για εικόνα
        if (image && image.value.trim() !== "") {
            itemHTML += `<a href="${image.value}" target="_blank"><img src="${image.value}" alt="Image" style="max-width: 50%; height: auto;"/></a>`;
        }

         // Έλεγχος για εικόνα
         if (mytable && mytable.value.trim() !== "") {
            itemHTML += `<div>
        <input type="text"  id='searchInput' class="form-control" placeholder="Αναζήτηση">
        <br>
        <table id="search_table_page" class="table table-bordered">
${mytable.value}
</table>    
        <nav aria-label="Σελιδοποίηση">
            <ul id="pagination" class="pagination justify-content-center">
                <!-- Οι σελίδες θα προστεθούν εδώ από το JavaScript -->
            </ul>
        </nav>
    </div>`;
        }

        // Αν υπάρχει περιεχόμενο για το item, το προσθέτει στον πίνακα
        if (itemHTML) {
            htmlContentArray.push(itemHTML);
        }
    });

    // Αντικατάσταση του placeholder με το παραγόμενο περιεχόμενο
    const finalHTML = htmlContent.replace(
        ' <div class="container"></div>', 
        ` <div class="container">${htmlContentArray.join('')}</div>`
    );

    return finalHTML; // Επιστρέφει το παραγόμενο HTML
}
