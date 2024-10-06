    function addScript(src) {
        var script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
    }

const currentURL = window.location.href;  // Λειτουργία για να ελέγξει το URL και να προσθέσει id στο body
    if (currentURL.startsWith('https://grcodeclub.gr/c/')){addScript('https://grcodeclub.github.io/js/add/menu/programming/c.js');}
    else if (currentURL.startsWith('https://grcodeclub.gr/python/')){addScript('https://grcodeclub.github.io/js/add/menu/programming/python.js');}
    else if (currentURL.startsWith('https://grcodeclub.gr/orologia/') || currentURL.startsWith('https://grcodeclub.gr/network/orologia/')  || currentURL.startsWith('https://grcodeclub.gr/programming/orologia/')
             || currentURL.startsWith('https://grcodeclub.gr/system/orologia/')  || currentURL.startsWith('https://grcodeclub.gr/linux/orologia/') || currentURL.startsWith('https://grcodeclub.gr/cybersecurity/orologia/'))
        {addScript('https://grcodeclub.github.io/js/add/menu/orologia.js');}
    else if (currentURL.startsWith('https://grcodeclub.gr/network/protocol/ip/')){addScript('https://grcodeclub.github.io/js/add/menu/network/ip.js');}
