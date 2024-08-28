window.onload = function() {
    var menuLinks = [
   '<li><a href="https://grcodeclub.gr">Αρχική Σελίδα</a></li>',
        '<li><a href="https://grcodeclub.gr/cybersecurity/">Κυβερνοασφάλεια</a></li>',
        '<li><a href="https://grcodeclub.gr/cybersecurity/tools">Εργαλεία</a></li>',
        '<li><a href="https://grcodeclub.gr/cybersecurity/attacks">Επιθέσεις</a></li>',
        '<li><a href="https://grcodeclub.gr/cybersecurity/post">Έγγραφα</a></li>',
        '<li><a href="https://grcodeclub.gr/cybersecurity/orologia">Ορολογία</a></li>',
        '<li><a href="https://grcodeclub.gr/linux">Linux</a></li>',
        '<li style="height: 200px;"></li>'
    ];
    
    var $sidebarMenuInners = document.querySelectorAll('.sidebarMenuInner');
    $sidebarMenuInners.forEach(function($sidebarMenuInner) {
    menuLinks.forEach(function(link) {
        $sidebarMenuInner.insertAdjacentHTML('beforeend', link);
    });
});
};
