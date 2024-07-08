    var metaTag = document.createElement('meta');

    // Ορισμός των ιδιοτήτων του meta tag
    metaTag.setAttribute('property', 'og:image');
    metaTag.setAttribute('content', 'https://grcodeclub.github.io/files-page/preview/website.png');

    // Προσθήκη του meta tag στο <head> της σελίδας
    document.head.appendChild(metaTag);
