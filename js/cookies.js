document.addEventListener('DOMContentLoaded', function() {
    if (!getCookie('cookiesAccepted')) {
        document.getElementById('cookie-banner').style.display = 'block';
    }

    var acceptCookiesButton = document.getElementById('accept-cookies');
    var noacceptCookiesButton = document.getElementById('reject-cookies');
    
    let cookieStatus = getCookie('cookiesAccepted');

    if (noacceptCookiesButton) {
            noacceptCookiesButton.onclick = function() {
            setCookie_minutes('cookiesAccepted', 'false', 2);
            document.getElementById('cookie-banner').style.display = 'none';
        };
    
    }
    if (acceptCookiesButton) {
        acceptCookiesButton.onclick = function() {
            setCookie('cookiesAccepted', 'true', 2);
            document.getElementById('cookie-banner').style.display = 'none';
            var cookieSwitch = document.getElementById('cookies-ga4');
                if (cookieSwitch.checked) {
                    loadTrackingScripts();
                }
                var cookieSwitch_Social = document.getElementById('cookies-social');
                        console.log(cookieSwitch_Social.checked);

                 if (cookieSwitch_Social.checked) {
                     setCookie('cookiesSocial', 'true', 360);
                     loadMetaPixel();
                }

        };
    } else {
        console.error('Accept Cookies button not found.');
    }

        var cookieStatusSocial = getCookie('cookiesSocial');
            console.log(cookieStatusSocial);

    if (cookieStatusSocial === 'true') {
        console.log('Before');
        loadMetaPixel();
         console.log('After');
    }
    else {
    console.log('Cookie is not set to true.');
}

});



function setCookie_minutes(name, value, minutes) {
    const d = new Date();
    d.setTime(d.getTime() + (minutes * 60 * 1000)); // Υπολογισμός χρόνου λήξης σε χιλιοστά του δευτερολέπτου
    const expires = "expires=" + d.toUTCString(); // Ρύθμιση της ημερομηνίας λήξης σε UTC
    document.cookie = name + "=" + (value || "") + ";" + expires + ";path=/";
}


  function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "") + ";" + expires + ";path=/";
  }

  function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  function loadTrackingScripts() {
    var gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-MMLRVK48';
    document.head.appendChild(gtmScript);

    var gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-KP7YGYPW0R';
    document.head.appendChild(gaScript);

    gaScript.onload = function() {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-KP7YGYPW0R');
    };
  }

function loadMetaPixel() {
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';

    script.onload = function() {
        if (typeof fbq === 'function') {
            fbq.version = "2.9.165"; // Ρύθμιση της έκδοσης αφού η fbq έχει φορτωθεί
            fbq('init', '1233204201195274');
            fbq('track', 'PageView');
        } else {
            console.error('fbq is not defined after loading fbevents.js');
        }
    };

    script.onerror = function() {
        console.error('Failed to load fbevents.js');
    };

    document.head.appendChild(script);

    var noscript = document.createElement('noscript');
    var img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = 'https://www.facebook.com/tr?id=1233204201195274&ev=PageView&noscript=1';
    noscript.appendChild(img);

    document.body.appendChild(noscript);
}
