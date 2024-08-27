window.onload = function() {
    var menuLinks = [
        '<li><a href="https://grcodeclub.gr">Αρχική Σελίδα</a></li>',
        '<li><a href="https://grcodeclub.gr/programming/">Προγραμματισμός</a></li>',
        '<li><a href="https://grcodeclub.gr/linux/">Linux</a></li>',
        '<li><a href="https://grcodeclub.gr/windows/">Microsoft Windows</a></li>',
        '<li><a href="https://grcodeclub.gr/cybersecurity/">Κυβερνοασφάλεια</a></li>',
        '<li><a href="https://grcodeclub.gr/network/">Δίκτυα Υπολογιστών</a></li>',
        '<li style="height: 200px;"></li>'
    ];
    
    var $sidebarMenuInners = document.querySelectorAll('.sidebarMenuInner');
    $sidebarMenuInners.forEach(function($sidebarMenuInner) {
    menuLinks.forEach(function(link) {
        $sidebarMenuInner.insertAdjacentHTML('beforeend', link);
    });
});
};
