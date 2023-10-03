// Footer Copyright
const copyrightText = `
<p class="text-center">&copy; ${new Date().getFullYear()} |  Ibrahim Sharif | All rights reserved.</p>
`;

document.getElementById('copyright').innerHTML = copyrightText;

//Messenger Start
var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "127039220498095");
chatbox.setAttribute("attribution", "biz_inbox");

window.fbAsyncInit = function () {
    FB.init({
        xfbml: true,
        version: 'v18.0'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));