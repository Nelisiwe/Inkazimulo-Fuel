document.addEventListener('DOMContentLoaded', function () {
    let url = window.location.href;
    let navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        if (url.includes(link.href)) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var toggleContainer = document.querySelector('.toggle-container');
    var navLinks = document.getElementById('navLinks');

    toggleContainer.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});
