document.addEventListener('DOMContentLoaded', () => {

    function getHeaderOffset() {
        const header = document.getElementById('site-header');
        return header ? header.offsetHeight : 0;
    }

    function smoothScrollToElement(targetId) {
        const target = document.getElementById(targetId);
        if (!target) return;

        const offset = getHeaderOffset();
        const targetPosition =
            target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    // Працює і з "#id", і з "./#id"
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // якщо це не внутрішній якор
            if (!href || !href.includes('#')) return;

            const targetId = href.split('#')[1];
            if (!targetId) return;

            // якщо це перехід на іншу сторінку — не чіпаємо
            if (href.startsWith('http') || href.endsWith('.html')) return;

            e.preventDefault();
            smoothScrollToElement(targetId);
        });
    });

    // Скрол при завантаженні сторінки з хешем
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        setTimeout(() => {
            smoothScrollToElement(targetId);
        }, 300);
    }

});
