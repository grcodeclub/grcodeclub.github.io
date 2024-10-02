window.onload = function() {
    function addMenuLinks(menuLinks) {
        var $sidebarMenuInners = document.querySelectorAll('.sidebarMenuInner');
        $sidebarMenuInners.forEach(function($sidebarMenuInner) {
            menuLinks.forEach(function(link) {
                $sidebarMenuInner.insertAdjacentHTML('beforeend', link);
            });
        });
    }
    var cloudMenuLinks ;
    if (document.body.id === 'mobile') {
        cloudMenuLinks = [
            '<li><a href="https://grcodeclub.gr">Αρχική Σελίδα</a></li>',
            '<li><a href="https://grcodeclub.gr/network/mobile/">Mobile</a></li>',
            '<li><a href="https://grcodeclub.gr/mobile/android">Android</a></li>',
            '<li style="height: 200px;"></li>'
        ];
        addMenuLinks(cloudMenuLinks);
    }

        if (document.body.id === 'android') {
        networkMenuLinks = [
        '<li><a href="https://grcodeclub.gr">Αρχική Σελίδα</a></li>',
        '<li><a href="https://grcodeclub.github.io/mobile">Mobile</a></li>',
        '<li><a href="https://grcodeclub.github.io/mobile/android"><span class="fa-brands fa-android" aria-hidden="true"></span> Android</li>',
        '<li><a href="https://grcodeclub.github.io/mobile/android/versions">Eκδόσεις</a></li>',
        '<li style="height: 200px;"></li>'
        ];
        addMenuLinks(menuLinks);
    }

    

};
