// const veryLongInterval = 20000;
// const longInterval = 10000;
// const normalInterval = 5000;
const shortInterval = 2000;
// const veryShortInterval = 1000;

// let extraStyle = "res/css/main.css";
// let compiledStyle = "res/css/compiledStyle.min.css";
// let baseStyle = "res/css/style.css";
// let rubikFont = "https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&display=swap";
// let robotoFont = "https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap";

let crispChat = "/assets/js/crisp.js"; // Crisp Chat Script

// Load Stylesheets in the order of importance
// window.load = delayedStyleSheetLoading(compiledStyle, veryShortInterval );
// window.load = delayedStyleSheetLoading(baseStyle, shortInterval );
// window.load = delayedStyleSheetLoading(extraStyle, veryLongInterval );
// window.load = delayedStyleSheetLoading(rubikFont, veryLongInterval );
// window.load = delayedStyleSheetLoading(robotoFont, veryLongInterval );


// Load Stylesheets after the DOM is fully loaded
// document.addEventListener("DOMContentLoaded", function () {
//     delayedStyleSheetLoading(extraStyle, veryLongInterval);
//     // delayedStyleSheetLoading(rubikFont, longInterval );
//     delayedStyleSheetLoading(robotoFont, veryLongInterval);
//     delayedScriptLoading(crispChat, veryLongInterval);

//     /*----------- Show Cinematic Fly IN on scroll ------------------*/
//     setTimeout(() => {
//         document.querySelector('#fly-in').style.display = 'block';
//     }, normalInterval);
// });


/**
 * Dynamically loads a stylesheet into the document after a specified delay.
 *
 * @param {string} stylesheetPath - The path to the stylesheet to be loaded.
 * @param {number} intervalTime - The delay in milliseconds before the stylesheet is loaded.
 */
// function delayedStyleSheetLoading(stylesheetPath, intervalTime) {
//     // const intervalTime = 10000;
//     // const stylesheetPath = "res/css/main.css";
//     setTimeout(() => {
//         var stylesheet = document.createElement("link");
//         stylesheet.rel = "stylesheet";
//         stylesheet.href = stylesheetPath;
//         document.head.appendChild(stylesheet);
//     }, intervalTime);
// }

/**
 * Use requestIdleCallback (More Performance-Friendly)
 * This method loads the script when the browser is idle.
 * 
 * @param {string} src - The source URL of the script to load.
 * @param {number} delay - The delay in milliseconds before loading the script.
 */
function loadScript(src) {
    var script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
}

//  Load the script after the DOM is fully loaded => Crisp Chat
// if ('requestIdleCallback' in window) {
//     requestIdleCallback(() => loadScript(crispChat));
// } else {
//     setTimeout(() => loadScript(crispChat), veryLongInterval); // Fallback
// }

function delayedScriptLoading(src, delay) {
    setTimeout(() => loadScript(src), delay); // Fallback
}

// delayedScriptLoading(crispChat, normalInterval);

document.addEventListener("DOMContentLoaded", function () {
    // Load the Crisp Chat script after the DOM is fully loaded
    delayedScriptLoading(crispChat, shortInterval);
    
});

// document.addEventListener("astro:page-load", () => {
//     delayedScriptLoading(crispChat, normalInterval);
// });