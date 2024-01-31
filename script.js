document.addEventListener('DOMContentLoaded', function () {
    let url = window.location.href;
    let navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        if (url.includes(link.href)) {
            link.classList.add('active');
        }
    });
});
