window.onload = function() {
    function addMenuLinks(menuLinks) {
        var $sidebarMenuInners = document.querySelectorAll('.sidebarMenuInner');
        $sidebarMenuInners.forEach(function($sidebarMenuInner) {
            menuLinks.forEach(function(link) {
                $sidebarMenuInner.insertAdjacentHTML('beforeend', link);
            });
        });
    }

    if (document.body.id === 'cloud') {
        var cloudMenuLinks = [
            '<li><a href="https://grcodeclub.gr">Αρχική Σελίδα</a></li>',
            '<li><a href="https://grcodeclub.gr/network/cloud/">Cloud</a></li>',
            '<li><a href="https://grcodeclub.gr/network/cloud/basic">Βασικές Γνώσεις</a></li>',
            '<li><a href="https://grcodeclub.gr/network/">Δίκτυα Υπολογιστών</a></li>',
            '<li style="height: 200px;"></li>'
        ];
        addMenuLinks(cloudMenuLinks);
    }

    if (document.body.id === 'network') {
        var networkMenuLinks = [
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
        addMenuLinks(networkMenuLinks);
    }
};
