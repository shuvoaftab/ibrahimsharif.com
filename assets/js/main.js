const veryLongInterval=2e4,longInterval=1e4,shortInterval=2e3,veryShortInterval=1e3;let extraStyle="assets/css/main.css",compiledStyle="assets/css/compiledStyle.min.css",baseStyle="assets/css/style.css",rubikFont="https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&display=swap",robotoFont="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap",crispChat="assets/js/crisp.js";function delayedStyleSheetLoading(e,t){setTimeout((()=>{var t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}),t)}function loadScript(e){var t=document.createElement("script");t.src=e,t.async=!0,document.body.appendChild(t)}function delayedScriptLoading(e,t){setTimeout((()=>loadScript(e)),t)}document.addEventListener("DOMContentLoaded",(function(){delayedStyleSheetLoading(extraStyle,2e4),delayedStyleSheetLoading(robotoFont,2e4),delayedScriptLoading(crispChat,2e4)}));