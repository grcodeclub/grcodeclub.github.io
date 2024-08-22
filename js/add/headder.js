const htmlContent = `
                <div class="Header"> <!--Αρχή Επικεφαλίδας-->
                    <div class="layout">
                        <div><img src="https://grcodeclub.gr/files-page/logo/white.png" class="logo"/></div>
                        <div><h1 class="header_text"><a href="https://grcodeclub.gr/"><span class="header_text">GrCode Club</span></a></h1></div>
                    </div> 
                </div> <!--Τέλος Επικεφαλίδας-->
`;

// Εύρεση του στόχου με το id 'add_headder'
const addHeadderDiv = document.getElementById('add_headder_and_menu');

// Προσθήκη του HTML περιεχομένου στο div με το id 'add_headder'
if (addHeadderDiv) {
    addHeadderDiv.innerHTML = htmlContent;
}
