// cookie-preline.js
// Safe loader for Preline HSOverlay usage in CookieNotice
window.addEventListener('load', function () {
    setTimeout(function () {
        try {
            document.querySelectorAll('.hs-overlay').forEach(function (el) {
                if (window && window.HSOverlay && typeof window.HSOverlay.open === 'function') {
                    window.HSOverlay.open(el);
                }
            });
        } catch (e) {
            // Preline not available — ignore
        }
    });
});