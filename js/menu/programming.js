window.onload = function() {
    var menuLinks = [
        '<li><a href="https://grcodeclub.gr">Αρχική Σελίδα</a></li>',
        ' <li><a href="https://grcodeclub.gr/programming/">Προγραμματισμός</a></li>',
        ' <li><a href="https://grcodeclub.gr/programming/more">Περισσότερα</a></li>',
        ' <li><a href="https://grcodeclub.gr/programming/orologia">Oρολογία</a></li>',
        '<li><a href="https://grcodeclub.gr/c">C</a></li>',
        '<li><a href="https://grcodeclub.gr/cpp">C++</a></li>',
        '<li><a href="https://grcodeclub.gr/java">Java</a></li>',
        '<li><a href="https://grcodeclub.gr/python">Python</a></li>',
        '<li><a href="https://grcodeclub.gr/programming/languages/sql">SQL</a></li>',
                '<li><a href="https://grcodeclub.gr/programming/languages/matlab">MATLAB</a></li>',
        '<li><a href="https://grcodeclub.gr/programming/languages/docker">Docker</a></li>',
        '<li><a href="https://grcodeclub.gr/programming/languages/markdown">Markdown</a></li>',
        '<li style="height: 200px;"></li>'
    ];
    
    var $sidebarMenuInners = document.querySelectorAll('.sidebarMenuInner');
    $sidebarMenuInners.forEach(function($sidebarMenuInner) {
    menuLinks.forEach(function(link) {
        $sidebarMenuInner.insertAdjacentHTML('beforeend', link);
    });
});
};
