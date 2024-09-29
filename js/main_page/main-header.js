window.addEventListener('scroll', function() {
    var header = document.getElementById('main-header');
    var logoImg = document.getElementById('logo');

    if (window.scrollY > 10) {
        header.style.backgroundColor = 'rgba(50, 50, 50, 0.9)'; // Σκούρο γκρι
        header.style.backdropFilter = 'blur(8px)'; // Θόλωμα
        header.style.opacity = '1';
        
        logoImg.style.display = 'block';
    } else {
        header.style.backgroundColor = 'rgba(50, 50, 50, 0.9)'; // Σκούρο γκρι
        header.style.backdropFilter = 'blur(0px)';
        header.style.opacity = '1';
        
        logoImg.style.display = 'none';
    }
});
