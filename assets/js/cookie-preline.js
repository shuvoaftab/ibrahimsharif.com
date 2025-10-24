/* eslint-disable no-console */
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
        } catch {
            // Preline not available — ignore
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cookieNotice = document.getElementById('cookies-with-stacked-buttons');
    const cookieModal = document.getElementById('cookie-modal');
    const consent = JSON.parse(localStorage.getItem('cookieConsent'));

    if (!consent) {
        // Show after 10 seconds as per component script
        setTimeout(() => {
            cookieNotice.classList.remove('hidden');
        }, 10000);
    }

    document.getElementById('allow-all').addEventListener('click', () => {
        saveConsent({ essential: true, functional: true, analytics: true, marketing: true });
        loadAllScripts();
        hideCookieNotice();
    });

    document.getElementById('reject-all').addEventListener('click', () => {
        saveConsent({ essential: true, functional: false, analytics: false, marketing: false });
        hideCookieNotice();
    });

    document.getElementById('dismiss-cookie').addEventListener('click', () => {
        saveConsent({ essential: true, functional: false, analytics: false, marketing: false });
        hideCookieNotice();
    });

    document.getElementById('manage-cookies').addEventListener('click', () => {
        cookieModal.classList.remove('hidden');
        cookieModal.classList.add('flex', 'items-center', 'justify-center');
    });

    document.getElementById('save-preferences').addEventListener('click', () => {
        saveConsent({
            essential: true,
            functional: document.getElementById('functional').checked,
            analytics: document.getElementById('analytics').checked,
            marketing: document.getElementById('marketing').checked
        });
        loadAllScripts();
        cookieModal.classList.add('hidden');
        cookieModal.classList.remove('flex', 'items-center', 'justify-center');
        hideCookieNotice();
    });

    document.getElementById('cancel-modal').addEventListener('click', () => {
        cookieModal.classList.add('hidden');
        cookieModal.classList.remove('flex', 'items-center', 'justify-center');
    });

    function saveConsent(consentObj) {
        consentObj.timestamp = new Date().toISOString();
        localStorage.setItem('cookieConsent', JSON.stringify(consentObj));
    }

    function hideCookieNotice() {
        cookieNotice.classList.add('hidden');
    }

    function loadAllScripts() {
        const consent = JSON.parse(localStorage.getItem('cookieConsent'));
        if (consent.functional) {
            console.log('Functional cookies enabled');
            // Hook for functional cookies
        }
        if (consent.analytics) {
            console.log('Analytics cookies enabled');
            // Hook for analytics cookies
        }
        if (consent.marketing) {
            console.log('Marketing cookies enabled');
            // Hook for marketing cookies
        }
    }
});