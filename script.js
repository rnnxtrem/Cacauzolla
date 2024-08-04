document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    });

    FUTIBA.init({
        apiKey: "I2TRxJFpb8wFt9nNNPrk"
    });
});
