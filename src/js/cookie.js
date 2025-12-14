document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('cookie-popup');
    const acceptBtn = document.getElementById('accept-cookies');
    const declineBtn = document.getElementById('decline-cookies');
    const closeBtn = document.querySelector('.popup-close-button');

    const hasAccepted = localStorage.getItem('cookiesAccepted');

    if (!hasAccepted) {
        popup.style.display = 'block';
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'yes');
        popup.style.display = 'none';
    });

    declineBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'no');
        popup.style.display = 'none';
    });

    closeBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'undecided');
        popup.style.display = 'none';
    });
});