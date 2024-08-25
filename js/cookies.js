window.addEventListener('load', function() {
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
        loadMetaPixel();
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
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MMLRVK48');

  var gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-KP7YGYPW0R';
  document.head.appendChild(gaScript);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-KP7YGYPW0R');
}

function loadMetaPixel() {
   !function(f,b,e,v,n,t,s){
       if(f.fbq)return;
       n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};
       if(!f._fbq)f._fbq=n;
       n.push=n;
       n.loaded=!0;
       n.version='2.0';
       n.queue=[];
       t=b.createElement(e);
       t.async=!0;
       t.src=v;
       s=b.getElementsByTagName(e)[0];
       s.parentNode.insertBefore(t,s)}
    (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1233204201195274');
    fbq('track', 'main');
    fbq('track', 'programming');
    fbq('track', 'network');

}
