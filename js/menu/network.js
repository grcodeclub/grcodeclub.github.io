window.onload = function() {
    if (document.body.id === 'cloud') {
        var menuLinks = [
        '<li><a href="https://grcodeclub.gr">Αρχική Σελίδα</a></li>',
        '<li><a href="https://grcodeclub.gr/cloud/">Cloud</a></li>',
        '<li><a href="https://grcodeclub.gr/cloud/basic">Βασικές Γνώσεις</a></li>',
        '<li><a href="https://grcodeclub.gr/network/">Δίκτυα Υπολογιστών</a></li>',
        '<li style="height: 200px;"></li>'
        ];    
        var $sidebarMenuInners = document.querySelectorAll('.sidebarMenuInner');
        $sidebarMenuInners.forEach(function($sidebarMenuInner) {
        menuLinks.forEach(function(link) {$sidebarMenuInner.insertAdjacentHTML('beforeend', link);});
        });
    }
    if (document.body.id === 'network') {
            var menuLinks = [
        '<li><a href="https://grcodeclub.gr">Αρχική Σελίδα</a></li>',
        '<li><a href="https://grcodeclub.gr/network/">Δίκτυα Υπολογιστών</a></li>',
        '<li><a href="https://grcodeclub.gr/network/protocol">Πρωτόκολλα</a></li>',
        '<li><a href="https://grcodeclub.gr/network/more/list/services-port">Υπηρεσίες και Ports</a></li>',
        '<li><a href="https://grcodeclub.gr/network/more/list/application-and-protocols">Εφαρμογή και Πρωτόκολλο</a></li>',
        '<li><a href="https://grcodeclub.gr/network/orologia">Ορολογία</a></li>',
        '<li><a href="https://grcodeclub.gr/network/more">Έγγραφα</a></li>',
        '<li><a href="https://grcodeclub.gr/network/cloud/">Cloud</a></li>',
        '<li style="height: 200px;"></li>'
        ];
        var $sidebarMenuInners = document.querySelectorAll('.sidebarMenuInner');
        $sidebarMenuInners.forEach(function($sidebarMenuInner) {
        menuLinks.forEach(function(link) {$sidebarMenuInner.insertAdjacentHTML('beforeend', link);});
        });
    }
};

