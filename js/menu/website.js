
window.onload = function() {
    var menuLinks = [
        '<li><a href="https://grcodeclub.gr">Αρχική Σελίδα</a></li>',
        '<li><a href="https://grcodeclub.gr/website">Ιστοσελίδες</a></li>',
        '<li><a href="https://grcodeclub.gr/website/css">CSS</a></li>',
        '<li><a href="https://grcodeclub.gr/website/html">Html</a></li>',
        '<li><a href="https://grcodeclub.gr/php">Php</a></li>',
        '<li><a href="https://grcodeclub.gr/javascript">JavaScript</a></li>',
        '<li><a href="https://grcodeclub.gr/nodejs">Node.js</a></li>',
        '<li><a href="https://grcodeclub.gr/website/orologia">Oρολογία</a></li>',
        '<li><a href="https://grcodeclub.gr/website/cms/wordpress">WordPress</a></li>',
        '<li><a href="https://grcodeclub.gr/website/more/">Περισσότερα</a></li>',
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
