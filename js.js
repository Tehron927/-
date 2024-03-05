
document.addEventListener('DOMContentLoaded', function() {
    const consultationButton = document.getElementById('consultationBtn');
    const menu = document.querySelector('.menu');
    const closeButton = document.getElementById('closeBtn');

    consultationButton.addEventListener('click', function() {
        menu.classList.add('active');
    });

    closeButton.addEventListener('click', function() {
        menu.classList.remove('active');
    });
});



