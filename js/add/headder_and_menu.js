const htmlContent = `
<section class="show_desktop"> <!--Αρχή Εμφάνιση Υπολογιστή-->
                <div class="Header"> <!--Αρχή Επικεφαλίδας-->
                    <div class="layout">
                        <div><img src="https://grcodeclub.gr/files-page/logo/white.png" class="logo"/></div>
                        <div><h1 class="header_text"><a href="https://grcodeclub.gr/"><span class="header_text">GrCode Club</span></a></h1></div>
                    </div> 
                </div> <!--Τέλος Επικεφαλίδας-->
                <div class="Menu"> <!--Αρχή Menu-->
                    <div id="sidebarMenu" style="overflow: auto;">
                        <ul class="sidebarMenuInner"></ul>
                    </div>
                </div><!--Τέλος Menu-->
            </section> <!--Τέλος Εμφάνιση Υπολογιστή-->

            <section class="show_mobile">  <!--Αρχή εμφάνιση σε κινητά-->
                <div class="Header"> <!--Αρχή Επικεφαλίδας σε κινητά-->
                    <div class="layout">
                        <div><img src="https://grcodeclub.gr/files-page/logo/white.png" class="logo"/></div>
                        <div><h1 class="header_text"><a href="https://grcodeclub.gr/"><span class="header_text">GrCode Club</span></a></h1></div>
                    </div> 
                </div> <!--Τέλος Επικεφαλίδας σε κινητά -->
                <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
                <label for="openSidebarMenu" class="sidebarIconToggle">
                    <div class="spinner diagonal part-1"></div>
                    <div class="spinner horizontal"></div>
                    <div class="spinner diagonal part-2"></div>
                </label>
                <div id="sidebarMenu" style="overflow: auto;">
                    <ul class="sidebarMenuInner"></ul>
                </div>
            </section> <!--Τέλος εμφάνιση σε κινητά-->
`;

// Εύρεση του στόχου με το id 'add_headder'
const addHeadderDiv = document.getElementById('add_headder_and_menu');

// Προσθήκη του HTML περιεχομένου στο div με το id 'add_headder'
if (addHeadderDiv) {
    addHeadderDiv.innerHTML = htmlContent;
}
