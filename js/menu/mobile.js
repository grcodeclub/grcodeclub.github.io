window.onload = function() {
    function addMenuLinks(menuLinks) {
        var $sidebarMenuInners = document.querySelectorAll('.sidebarMenuInner');
        $sidebarMenuInners.forEach(function($sidebarMenuInner) {
            menuLinks.forEach(function(link) {
                $sidebarMenuInner.insertAdjacentHTML('beforeend', link);
            });
        });
    }
    var menuLinks ;
    if (document.body.id === 'mobile') {
        menuLinks = [
            '<li><a href="https://grcodeclub.gr">Αρχική Σελίδα</a></li>',
            '<li><a href="https://grcodeclub.gr/mobile/">Κινητά</a></li>',
            '<li><a href="https://grcodeclub.github.io/mobile/android"><span class="fa-brands fa-android" aria-hidden="true"></span> Android</li>',
            '<li><a href="https://grcodeclub.github.io/mobile/android/versions"><span class="fa-brands fa-android" aria-hidden="true"></span> Android Eκδόσεις</li>',
            '<li><a href="https://grcodeclub.github.io/mobile/android/adb"><span class="fa-solid fa-terminal" aria-hidden="true"></span> Android Debug Bridge</li>',
            '<li style="height: 200px;"></li>'
        ];
        addMenuLinks(menuLinks);
    }
};
