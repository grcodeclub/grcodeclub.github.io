window.onload = function() {
    function addMenuLinks(menuLinks) {
        var $sidebarMenuInners = document.querySelectorAll('.sidebarMenuInner');
        $sidebarMenuInners.forEach(function($sidebarMenuInner) {
            menuLinks.forEach(function(link) {
                $sidebarMenuInner.insertAdjacentHTML('beforeend', link);
            });
        });
    }

        if (document.body.id === 'system') {
    var menuLinks = [
        '<li><a href="https://grcodeclub.gr">Αρχική Σελίδα</a></li>',
        '<li><a href="https://grcodeclub.github.io/system">Λειτουργικό Σύστημα</a></li>',
        '<li><a href="https://grcodeclub.github.io/system/orologia">Ορολογία</a></li>',
        '<li><a href="https://grcodeclub.github.io/windows"><span class="fa-brands fa-windows" aria-hidden="true"></span> Microsoft Windows</a></li>',
        '<li><a href="https://grcodeclub.github.io/linux"><span class="fa-brands fa-linux" aria-hidden="true"></span> Linux</li>',
        '<li><a href="https://grcodeclub.github.io/mobile/android"><span class="fa-brands fa-android" aria-hidden="true"></span> Android</li>',
        '<li style="height: 200px;"></li>'
    ];
    
        addMenuLinks(menuLinks);
    }

        if (document.body.id === 'image') {
    var menuLinks = [
        '<li><a href="https://grcodeclub.gr">Αρχική Σελίδα</a></li>',
        '<li><a href="https://grcodeclub.github.io/more/image">Εικόνες</a></li>',
        '<li><a href="https://grcodeclub.github.io/more/image/download-elements">Download Elements</a></li>',
        '<li style="height: 200px;"></li>'
    ];
    
        addMenuLinks(menuLinks);
    }

       
    

};
