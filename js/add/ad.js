document.addEventListener('DOMContentLoaded', function() {
    // Προσθήκη CSS
    const style = document.createElement('style');
    style.innerHTML = `
        .ad-banner {
            position: fixed;
            bottom: 0;
            right: 0;
            border: 1px solid #ccc;
            text-align: center;
            background-color: white;
            z-index: 1000;
            padding: 5px;
        }

        .ad-banner img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .ad-banner .close-btn {
            position: absolute;
            top: 2px;
            right: 2px;
            background-color: #f00;
            color: #fff;
            border: none;
            cursor: pointer;
            font-size: 14px;
            padding: 2px 5px;
        }

           @media (min-width: 321px) and (max-width: 768px) {
            .ad-banner {
                width: 320px;
                height: 50px;
            }
        }

        @media (min-width: 769px) {
            .ad-banner {
                width: 200px;
                height: 200px;
            }
            }

    `;
    document.head.appendChild(style);

    // Δημιουργία του div για το banner
    const adBanner = document.createElement('div');
    adBanner.classList.add('ad-banner');

    // Δημιουργία κουμπιού για το κλείσιμο της διαφήμισης
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-btn');
    closeButton.innerText = 'X';
    closeButton.addEventListener('click', function() {
        adBanner.style.display = 'none';
        setTimeout(function() {
            adBanner.style.display = 'block';
        }, 180000); // Επαναφορά του banner μετά από 3 λεπτά (180.000ms)
    });
    adBanner.appendChild(closeButton);

    // Δημιουργία του link
    const adLink = document.createElement('a');
    adLink.id = 'adLink';
    adLink.href = 'https://grcodeclub.gr/files-page/background/android.png'; // Αρχικό href

    // Δημιουργία της εικόνας
    const adImage = document.createElement('img');
    adImage.id = 'adImage';
    adImage.src = 'https://grcodeclub.gr/files-page/background/android.png'; // Αρχική εικόνα
    adImage.alt = 'Διαφήμιση 1';

    // Προσθήκη της εικόνας στο link και το link στο banner
    adLink.appendChild(adImage);
    adBanner.appendChild(adLink);

    // Προσθήκη του banner στο σώμα του εγγράφου
    document.body.appendChild(adBanner);

    // Διαφημίσεις
    const ads = [
        { img: 'https://grcodeclub.gr/files-page/background/computer.jpg', link: 'https://grcodeclub.gr/files-page/background/android.png' },
        { img: 'https://grcodeclub.gr/files-page/background/cybersecurity.jpg', link: 'https://grcodeclub.gr/files-page/background/android.png' },
        { img: 'https://grcodeclub.gr/files-page/background/android.png', link: 'https://grcodeclub.gr/files-page/background/android.png' }
    ];
    let currentAdIndex = 0;

    // Συνάρτηση για αλλαγή διαφήμισης
    function changeAd() {
        currentAdIndex = (currentAdIndex + 1) % ads.length;
        document.getElementById('adImage').src = ads[currentAdIndex].img;
        document.getElementById('adLink').href = ads[currentAdIndex].link;
    }

    // Ορισμός χρονικού διαστήματος 10 δευτερολέπτων για την αλλαγή διαφήμισης
    setInterval(changeAd, 10000);
});
