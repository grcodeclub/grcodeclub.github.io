window.onload = function() {
    var menuLinks = [
        '<li><a href="https://grcodeclub.gr">Αρχική Σελίδα</a></li>',
        '<li><a href="https://grcodeclub.github.io/system">Λειτουργικό Σύστημα</a></li>',
        '<li><a href="https://grcodeclub.github.io/system/orologia">Ορολογία</a></li>',
        '<li><a href="https://grcodeclub.github.io/windows">Microsoft Windows</a></li>',
        '<li><a href="https://grcodeclub.github.io/linux">Linux</li>',
        '<li><a href="https://grcodeclub.github.io/system/android">Android</li>',
        '<li style="height: 200px;"></li>'
    ];
    
    var $sidebarMenuInners = document.querySelectorAll('.sidebarMenuInner');
    $sidebarMenuInners.forEach(function($sidebarMenuInner) {
    menuLinks.forEach(function(link) {
        $sidebarMenuInner.insertAdjacentHTML('beforeend', link);
    });
});
};
