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
        '<li><a href="https://grcodeclub.github.io/system/android"><span class="fa-brands fa-android" aria-hidden="true"></span> Android</li>',
        '<li style="height: 200px;"></li>'
    ];
    
        addMenuLinks(menuLinks);
    }


        if (document.body.id === 'linux') {
    var menuLinks = [
        '<li><a href="https://grcodeclub.gr">Αρχική Σελίδα</a></li>',
        '<li><a href="https://grcodeclub.github.io/linux"><span class="fa-brands fa-linux" aria-hidden="true"></span> Linux</li>',
        '<li><a href="https://grcodeclub.github.io/linux/terminal"><span class="fa-solid fa-terminal" aria-hidden="true"></span> Terminal</li>',
        '<li><a href="https://grcodeclub.github.io/linux/install"><span class="fa-solid fa-terminal" aria-hidden="true"></span> Εγκατάσταση Προγραμμάτων</li>',
        '<li><a href="https://grcodeclub.github.io/linux/files">Αρχεία</a></li>',
        '<li><a href="https://grcodeclub.github.io/linux/orologia">Ορολογία</a></li>',
        '<li><a href="https://grcodeclub.github.io/linux/more/distro">Λίστα με τα Distro</a></li>',
        '<li style="height: 200px;"></li>'
    ];
    
        addMenuLinks(menuLinks);
    }

            if (document.body.id === 'windows') {
    var menuLinks = [
            '<li><a href="https://grcodeclub.gr">Αρχική Σελίδα</a></li>',
        '<li><a href="https://grcodeclub.github.io/windows"><span class="fa-brands fa-windows" aria-hidden="true"></span> Microsoft Windows</a></li>',
        '<li><a href="https://grcodeclub.github.io/windows/orologia">Ορολογία</a></li>',
        '<li><a href="https://grcodeclub.github.io/windows/command"><span class="fa-solid fa-terminal" aria-hidden="true"></span> Γραμμή εντολών</a></li>',
        '<li><a href="https://grcodeclub.github.io/windows/command/powershell"><span class="fa-solid fa-terminal" aria-hidden="true"></span> PowerShell</a></li>',
        '<li><a href="https://grcodeclub.github.io/windows/more/run"><span class="fa-solid fa-terminal" aria-hidden="true"></span> Run Commands</a></li>',
        '<li><a href="https://grcodeclub.github.io/windows/more/language-id">Language ID</a></li>',
        '<li style="height: 200px;"></li>'
    ];
    
        addMenuLinks(menuLinks);
    }
    
    if (document.body.id === 'android') {
        var networkMenuLinks = [
        '<li><a href="https://grcodeclub.gr">Αρχική Σελίδα</a></li>',
        '<li><a href="https://grcodeclub.github.io/system/android"><span class="fa-brands fa-android" aria-hidden="true"></span> Android</li>',
        '<li><a href="https://grcodeclub.github.io/system/android/versions">Eκδόσεις</a></li>',
        '<li><a href="https://grcodeclub.github.io/system">Λειτουργικά Συστήματα</a></li>',
        '<li style="height: 200px;"></li>'
        ];
        addMenuLinks(menuLinks);
    }
};
