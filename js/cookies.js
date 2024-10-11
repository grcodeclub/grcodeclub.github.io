// Περιμένει να φορτώσει ολόκληρη η σελίδα
window.addEventListener('load', function() {
    // Ελέγχει αν ο χρήστης έχει ήδη αποδεχτεί τα cookies
    if (!getCookie('cookiesAccepted')) {
        // Αν δεν έχει αποδεχτεί, εμφανίζει την μπάρα cookies
        document.getElementById('cookie-banner').style.display = 'block';
    }
    // Αν τα cookies έχουν γίνει Accept, φορτώνει τα tracking scripts
    if (getCookie('cookiesAccepted') === 'true') {
        loadTrackingScripts();
    }
        
    // Παίρνει τα κουμπιά για την αποδοχή ή την απόρριψη των cookies
    var acceptCookiesButton = document.getElementById('accept-cookies');
    var noacceptCookiesButton = document.getElementById('reject-cookies');
    let cookieStatus = getCookie('cookiesAccepted');

    // Αν το κουμπί απόρριψης υπάρχει, ορίζει το onclick
    if (noacceptCookiesButton) {
        noacceptCookiesButton.onclick = function() {
            // Διαγράφει όλα τα cookies
            deleteAllCookies();
            // Ορίζει το cookie 'cookiesAccepted' σε 'false' για 2 λεπτά
            setCookie_minutes('cookiesAccepted', 'false', 2);
            // Κρύβει την μπάρα cookies
            document.getElementById('cookie-banner').style.display = 'none';
        };
    }

    // Αν το κουμπί αποδοχής υπάρχει, ορίζει το onclick
    if (acceptCookiesButton) {
        acceptCookiesButton.onclick = function() {
            // Ορίζει το cookie 'cookiesAccepted' σε 'true' για 2 ημέρες
            setCookie('cookiesAccepted', 'true', 2);
            // Κρύβει την μπάρα cookies
            document.getElementById('cookie-banner').style.display = 'none';
            
            // Παίρνει το switch για τα tracking scripts
            var cookieSwitch = document.getElementById('cookies-ga4');
            // Αν το switch είναι επιλεγμένο, φορτώνει τα tracking scripts
            if (cookieSwitch.checked) {
                loadTrackingScripts();
            }

            // Παίρνει το switch για τα social cookies
            var cookieSwitch_Social = document.getElementById('cookies-social');
            console.log(cookieSwitch_Social.checked);

            // Αν το switch για τα social cookies είναι επιλεγμένο, ορίζει το social cookie
            if (cookieSwitch_Social.checked) {
                setCookie('cookiesSocial', 'true', 2);
                loadMetaPixel(); // Φορτώνει το Facebook Meta Pixel
            }
        };
    } else {
        // Καταγράφει σφάλμα αν το κουμπί αποδοχής δεν βρεθεί
        console.error('Accept Cookies button not found.');
    }

    // Ελέγχει την κατάσταση του social cookie
    var cookieStatusSocial = getCookie('cookiesSocial');
    console.log(cookieStatusSocial);

    // Αν το social cookie είναι ρυθμισμένο σε true, φορτώνει το Meta Pixel
    if (cookieStatusSocial === 'true') {
        loadMetaPixel();
    } else {
        // Καταγράφει ότι το cookie δεν είναι ρυθμισμένο σε true
        console.log('Cookie is not set to true.');
    }
});

// Συνάρτηση για να ορίσει ένα cookie με χρόνο λήξης σε λεπτά
function setCookie_minutes(name, value, minutes) {
    const d = new Date(); // Δημιουργεί ένα νέο αντικείμενο ημερομηνίας
    d.setTime(d.getTime() + (minutes * 60 * 1000)); // Υπολογίζει το χρόνο λήξης σε χιλιοστά του δευτερολέπτου
    const expires = "expires=" + d.toUTCString(); // Ρυθμίζει την ημερομηνία λήξης σε UTC
    // Ορίζει το cookie
    document.cookie = name + "=" + (value || "") + ";" + expires + ";path=/";
}

// Συνάρτηση για να ορίσει ένα cookie με χρόνο λήξης σε ημέρες
function setCookie(name, value, days) {
    let date = new Date(); // Δημιουργεί ένα νέο αντικείμενο ημερομηνίας
    // Καταγράφει την ημερομηνία λήξης για αποσφαλμάτωση
    console.log('Cookie set with expiration:', new Date(Date.now() + (2 * 24 * 60 * 60 * 1000)).toUTCString());
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Υπολογίζει το χρόνο λήξης σε χιλιοστά του δευτερολέπτου
    let expires = "expires=" + date.toUTCString(); // Ρυθμίζει την ημερομηνία λήξης σε UTC
    // Ορίζει το cookie
    document.cookie = name + "=" + (value || "") + ";" + expires + ";path=/";
}

// Συνάρτηση για να πάρει ένα cookie με βάση το όνομά του
function getCookie(name) {
    let nameEQ = name + "="; // Προετοιμάζει το όνομα του cookie για σύγκριση
    let ca = document.cookie.split(';'); // Διαχωρίζει τα cookies σε πίνακα
    // Βρόχος για να διασχίσει τα cookies
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i]; // Παίρνει κάθε cookie
        while (c.charAt(0) === ' ') c = c.substring(1, c.length); // Αφαιρεί τα κενά
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length); // Επιστρέφει την τιμή του cookie αν βρεθεί
    }
    return null; // Επιστρέφει null αν δεν βρεθεί το cookie
}

// Συνάρτηση για να φορτώσει τα tracking scripts
function loadTrackingScripts() {
    (function(w,d,s,l,i){
        w[l]=w[l]||[]; // Δημιουργία dataLayer αν δεν υπάρχει
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'}); // Προσθήκη του χρόνου εκκίνησης
        var f=d.getElementsByTagName(s)[0], // Παίρνει το πρώτο tag script
            j=d.createElement(s), // Δημιουργεί ένα νέο script tag
            dl=l!='dataLayer'?'&l='+l:''; // Διαμορφώνει το όνομα του dataLayer
        j.async=true; // Ορίζει το script να φορτώνει ασύγχρονα
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; // Ορίζει τη διεύθυνση URL του script
        f.parentNode.insertBefore(j,f); // Εισάγει το script πριν από το πρώτο tag
    })(window,document,'script','dataLayer','GTM-MMLRVK48');
}

// Συνάρτηση για την εκδήλωση tracking
function event(){
    window.dataLayer = window.dataLayer || []; // Δημιουργία dataLayer αν δεν υπάρχει
    function gtag(){dataLayer.push(arguments);} // Συνάρτηση gtag για προσθήκη δεδομένων στο dataLayer
    gtag('js', new Date()); // Εκκινεί το gtag
    gtag('config', 'G-KP7YGYPW0R'); // Ρυθμίζει το tracking ID
}

// Συνάρτηση για να διαγράψει όλα τα cookies
function deleteAllCookies() {
    document.cookie.split(";").forEach(function(cookie) {
        var name = cookie.split("=")[0]; // Παίρνει το όνομα του cookie
        // Διαγράφει το cookie ορίζοντας την ημερομηνία λήξης στο παρελθόν
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=grcodeclub.gr; SameSite=Lax;";
        console.log(name + "=" + getCookie(cookie) + "; expires=Wed, 01 Jan 1997 00:00:00 GMT; path=/; SameSite=Lax;"); // Καταγράφει τη διαγραφή
    });
}

// Συνάρτηση για να φορτώσει το Meta Pixel
function loadMetaPixel() {
   !function(f,b,e,v,n,t,s){
       if(f.fbq)return; // Αν το fbq υπάρχει, τερματίζει τη διαδικασία
       n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; // Δημιουργεί τη συνάρτηση fbq
       if(!f._fbq) f._fbq=n; // Δημιουργεί το fbq αν δεν υπάρχει
       n.push=n; // Δημιουργεί μια σειρά για την fbq
       n.loaded=!0; // Σημαίνει ότι το fbq έχει φορτωθεί
       n.version='2.0'; // Θέτει την έκδοση του fbq
       n.queue=[]; // Δημιουργεί μια ουρά για τις εκδηλώσεις
       t=b.createElement(e); // Δημιουργεί ένα νέο tag script
       t.async=!0; // Ορίζει το script να φορτώνει ασύγχρονα
       t.src=v; // Ορίζει τη διεύθυνση URL του script
       s=b.getElementsByTagName(e)[0]; // Παίρνει το πρώτο tag script
       s.parentNode.insertBefore(t,s) // Εισάγει το script πριν από το πρώτο tag
   }
   (window, document,'script','https://connect.facebook.net/en_US/fbevents.js'); // Φορτώνει το Facebook Events script
   fbq('init', '1233204201195274'); // Αρχικοποιεί το Meta Pixel
   fbq('track', 'main'); // Παρακολουθεί το κύριο γεγονός
   fbq('track', 'programming'); // Παρακολουθεί το γεγονός 'programming'
   fbq('track', 'network'); // Παρακολουθεί το γεγονός 'network'
}
