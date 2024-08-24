 // Εμφάνιση του banner αν δεν έχει δοθεί συγκατάθεση
    window.onload = function() {
      if (!getCookie('cookiesAccepted')) {
        document.getElementById('cookie-banner').style.display = 'block';
      }
    };

    // Διαχείριση της αποδοχής των cookies
    document.getElementById('accept-cookies').onclick = function() {
      setCookie('cookiesAccepted', 'true', 365);
      document.getElementById('cookie-banner').style.display = 'none';
      loadTrackingScripts();
    };

    // Συνάρτηση για να ορίσεις cookies
    function setCookie(name, value, days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      let expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + (value || "") + ";" + expires + ";path=/";
    }

    // Συνάρτηση για να πάρεις cookies
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

    // Φόρτωση των tracking scripts μετά την αποδοχή των cookies
    function loadTrackingScripts() {
      // Google Tag Manager
      var gtmScript = document.createElement('script');
      gtmScript.async = true;
      gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-MMLRVK48';
      document.head.appendChild(gtmScript);

      // Google Analytics
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
