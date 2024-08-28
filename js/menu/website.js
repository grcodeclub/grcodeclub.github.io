
window.onload = function() {
    var menuLinks = [
        '<li><a href="https://grcodeclub.gr">Αρχική Σελίδα</a></li>',
        '<li><a href="https://grcodeclub.gr/web">Ιστοσελίδες</a></li>',
        '<li><a href="https://grcodeclub.gr/web/css">CSS</a></li>',
        '<li><a href="https://grcodeclub.gr/web/html">Html</a></li>',
        '<li><a href="https://grcodeclub.gr/php">Php</a></li>',
        '<li><a href="https://grcodeclub.gr/javascript">JavaScript</a></li>',
        '<li><a href="https://grcodeclub.gr/nodejs">Node.js</a></li>',
        '<li><a href="https://grcodeclub.gr/web/orologia">Oρολογία</a></li>',
        '<li><a href="https://grcodeclub.gr/web/cms/wordpress">WordPress</a></li>',
        '<li><a href="https://grcodeclub.gr/web/more/">Περισσότερα</a></li>',
        '<li><a href="https://grcodeclub.gr/programming/">Γλώσσες Προγραμματισμού</a></li>',
        '<li style="height: 200px;"></li>'
    ];
    
    var $sidebarMenuInners = document.querySelectorAll('.sidebarMenuInner');
    $sidebarMenuInners.forEach(function($sidebarMenuInner) {
    menuLinks.forEach(function(link) {
        $sidebarMenuInner.insertAdjacentHTML('beforeend', link);
    });
});
};
