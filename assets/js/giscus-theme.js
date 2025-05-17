
// Get the initial theme from localStorage, default to system preference if not set
let theme = localStorage.getItem("theme");
if (theme === null) {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    localStorage.setItem("theme", theme);
}

// Initial Giscus script setup
let giscusAttributes = {
    "src": "https://giscus.app/client.js",
    "data-repo": "shuvoaftab/ibrahimsharif.com",
    "data-repo-id": "R_kgDOKQ7kDw",
    "data-category": "General",
    "data-category-id": "DIC_kwDOKQ7kD84CmTZ1",
    "data-mapping": "pathname",
    "data-reactions-enabled": "0",
    "data-emit-metadata": "0",
    "data-theme": "noborder_" + theme,
    "data-lang": "en",
    "crossorigin": "anonymous",
    "async": "",
};

let giscusScript = document.createElement("script");
Object.entries(giscusAttributes).forEach(([key, value]) => giscusScript.setAttribute(key, value));
document.body.appendChild(giscusScript);

// Function to update Giscus theme
function updateGiscusTheme() {
    const iframe = document.querySelector('iframe.giscus-frame');
    if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage(
            {
                giscus: {
                    setConfig: {
                        theme: `noborder_${theme}`
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

// Function to toggle theme
function toggleTheme() {
    // Toggle the theme in localStorage
    theme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme);

    // Update the page theme
    document.body.classList.toggle("dark", theme === "dark");

    // Update aria-label for accessibility
    const themeBtn = document.getElementById("theme-btn");
    themeBtn.setAttribute("aria-label", theme === "dark" ? "light" : "dark");

    // Update Giscus theme
    updateGiscusTheme();
}

// Add click event listener to theme button
const themeBtn = document.getElementById("theme-btn");
if (themeBtn) {
    themeBtn.addEventListener("click", toggleTheme);
}

// Initial theme application
document.body.classList.toggle("dark", theme === "dark");
themeBtn.setAttribute("aria-label", theme === "dark" ? "light" : "dark");

// Sync Giscus theme initially after a delay
setTimeout(updateGiscusTheme, 1000); // Delay to ensure iframe is loaded
