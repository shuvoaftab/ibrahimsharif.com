const longInterval = 5000;
const shortInterval = 2000;
const veryShortInterval = 1000;

let extraStyle = "assets/css/main.css";
let compiledStyle = "assets/css/compiledStyle.min.css";
let baseStyle = "assets/css/style.css";
let rubikFont = "https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&display=swap";
let robotoFont = "https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap";


// window.load = delayedStyleSheetLoading(compiledStyle, veryShortInterval );
// window.load = delayedStyleSheetLoading(baseStyle, shortInterval );
window.load = delayedStyleSheetLoading(extraStyle, longInterval );
window.load = delayedStyleSheetLoading(rubikFont, longInterval );
window.load = delayedStyleSheetLoading(robotoFont, longInterval );


function delayedStyleSheetLoading(stylesheetPath, intervalTime) {
    // const intervalTime = 10000;
    // const stylesheetPath = "assets/css/main.css";
    setTimeout(() => {
        var stylesheet = document.createElement("link");
        stylesheet.rel = "stylesheet";
        stylesheet.href = stylesheetPath;
        document.head.appendChild(stylesheet);
    }, intervalTime);
}
