(function () {
    // Guard to prevent re-execution during prefetching or page loads
    if (window.giscusInitialized) return;
    window.giscusInitialized = true;

    // Get the initial theme from localStorage, default to system preference if not set
    let giscusTheme = localStorage.getItem("theme") ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    localStorage.setItem("theme", giscusTheme);

    // Function to check if the current page should include Giscus
    function shouldIncludeGiscus() {
        return !!document.querySelector("#giscus-container");
    }

    // Function to initialize Giscus
    function initializeGiscus() {
        if (!shouldIncludeGiscus()) return;

        // Remove existing Giscus scripts and iframes to prevent duplicates
        document.querySelectorAll('script[src="https://giscus.app/client.js"]').forEach(script => script.remove());
        document.querySelectorAll('iframe.giscus-frame').forEach(iframe => iframe.remove());

        const giscusAttributes = {
            src: "https://giscus.app/client.js",
            "data-repo": "shuvoaftab/ibrahimsharif.com",
            "data-repo-id": "R_kgDOKQ7kDw",
            "data-category": "General",
            "data-category-id": "DIC_kwDOKQ7kD84CmTZ1",
            "data-mapping": "pathname",
            "data-reactions-enabled": "0",
            "data-emit-metadata": "0",
            "data-theme": "noborder_" + giscusTheme,
            "data-lang": "en",
            crossorigin: "anonymous",
            async: ""
        };

        const giscusScript = document.createElement("script");
        Object.entries(giscusAttributes).forEach(([key, value]) => giscusScript.setAttribute(key, value));
        const container = document.querySelector("#giscus-container");
        if (container) {
            container.appendChild(giscusScript);
        }
    }

    // Function to update Giscus theme
    function updateGiscusTheme() {
        if (!shouldIncludeGiscus()) return;

        const iframe = document.querySelector("iframe.giscus-frame");
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage(
                {
                    giscus: {
                        setConfig: {
                            theme: `noborder_${giscusTheme}`
                        }
                    }
                },
                "https://giscus.app"
            );
        } else {
            // Retry after a short delay if iframe isn't ready
            setTimeout(updateGiscusTheme, 500);
        }
    }

    // Function to clean up Giscus on non-post pages
    function cleanupGiscus() {
        if (!shouldIncludeGiscus()) {
            document.querySelectorAll('script[src="https://giscus.app/client.js"]').forEach(script => script.remove());
            document.querySelectorAll('iframe.giscus-frame').forEach(iframe => iframe.remove());
        }
    }

    // Function to toggle theme
    function toggleTheme() {
        // Toggle the theme in localStorage
        giscusTheme = giscusTheme === "light" ? "dark" : "light";
        localStorage.setItem("theme", giscusTheme);

        // Update the page theme
        document.body.classList.toggle("dark", giscusTheme === "dark");

        // Update aria-label for accessibility
        const themeBtn = document.getElementById("theme-btn");
        if (themeBtn) {
            themeBtn.setAttribute("aria-label", giscusTheme === "dark" ? "light" : "dark");
        }

        // Update Giscus theme if on a post page
        updateGiscusTheme();
    }

    // Function to apply theme and button state
    function applyTheme() {
        document.body.classList.toggle("dark", giscusTheme === "dark");
        const themeBtn = document.getElementById("theme-btn");
        if (themeBtn) {
            themeBtn.setAttribute("aria-label", giscusTheme === "dark" ? "light" : "dark");
            if (!themeBtn.dataset.listenerAdded) {
                themeBtn.addEventListener("click", toggleTheme);
                themeBtn.dataset.listenerAdded = "true";
            }
        }
    }

    // Initial setup
    applyTheme();
    initializeGiscus();
    if (shouldIncludeGiscus()) {
        setTimeout(updateGiscusTheme, 1000);
    }

    // Handle Astro page transitions and prefetching
    document.addEventListener("astro:page-load", () => {
        // Clean up Giscus on non-post pages
        cleanupGiscus();

        // Re-apply theme and button state
        applyTheme();

        // Initialize Giscus and sync theme if on a post page
        initializeGiscus();
        if (shouldIncludeGiscus()) {
            setTimeout(updateGiscusTheme, 1000);
        }
    });
})();