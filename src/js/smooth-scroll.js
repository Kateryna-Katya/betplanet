document.addEventListener('DOMContentLoaded', () => {

    /* =========================
       HEADER OFFSET
    ========================== */
    function getHeaderOffset() {
        const header = document.getElementById('site-header');
        return header ? header.offsetHeight : 0;
    }

    /* =========================
       SMOOTH SCROLL
    ========================== */
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

    /* =========================
       LINK HANDLER (SAFE)
    ========================== */
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href) return;

            const [path, hash] = href.split('#');
            if (!hash) return;

            /* ---- перевірка: та сама сторінка ---- */
            const currentFile = window.location.pathname.split('/').pop();

            const isSamePage =
                path === '' ||
                path === './' ||
                path === currentFile ||
                path === './' + currentFile;

            if (!isSamePage) return;

            const target = document.getElementById(hash);
            if (!target) return;

            e.preventDefault();
            smoothScrollToElement(hash);
        });
    });

    /* =========================
       SCROLL ON PAGE LOAD
    ========================== */
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        setTimeout(() => {
            smoothScrollToElement(targetId);
        }, 300);
    }

});
