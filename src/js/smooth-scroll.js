document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href) return;

        const [path, hash] = href.split('#');
        if (!hash) return;

        // якщо шлях НЕ поточна сторінка — дозволяємо перехід
        const isSamePage =
            !path ||
            path === '' ||
            path === './' ||
            path === window.location.pathname ||
            path === './' + window.location.pathname.split('/').pop();

        if (!isSamePage) return;

        const target = document.getElementById(hash);
        if (!target) return;

        e.preventDefault();
        smoothScrollToElement(hash);
    });
});
