window.addEventListener('scroll', function() {
    var header = document.getElementById('main-header');
    var logoImg = document.getElementById('logo');

    if (window.scrollY > 10) {
        header.style.backgroundColor = 'transparent';
        header.style.backdropFilter = 'blur(10px)';
        header.style.opacity = '1';

        logoImg.style.display = 'block';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.backdropFilter = 'blur(0px)';
        header.style.opacity = '1';
        logoImg.style.display = 'none';
    }
});
