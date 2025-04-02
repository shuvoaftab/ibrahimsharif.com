/*------------------------------------- Page Loader -------------------------------------*/
$(document).ready(function () {
    setTimeout(function () {
        $('.page-loader').fadeOut('slow');
    }, 700);
});

/*------------------------------------- Designer Text Animation -------------------------------------*/
firstText = ".";
secondText = "Developer";
thridText = "Freelancer";

fourthText = "Customer Success";
fifthText = "Web Developer";
sixthText = "WordPress Wizard";
seventhText = "Email Delivery Expert";
eighthText = "DNS Specialist";
ninthText = "Server Admin";

intervalTime = 500;
// window.load = displayText();
window.load = displayText2();

function displayText() {
    document.querySelector('.designer').innerText = firstText;
    firstText.innerText
    setTimeout(() => {
        document.querySelector('.designer').innerText = secondText;
    }, intervalTime * 5);
    setTimeout(() => {
        document.querySelector('.designer').innerText = thridText;
    }, intervalTime * 9);
}

function displayText2() {
    document.querySelector('.designer2').innerText = fourthText;
    setTimeout(() => {
        document.querySelector('.designer2').innerText = fifthText;
    }, intervalTime * 2);
    setTimeout(() => {
        document.querySelector('.designer2').innerText = sixthText;
    }, intervalTime * 5);
    setTimeout(() => {
        document.querySelector('.designer2').innerText = seventhText;
    }, intervalTime * 8);
    setTimeout(() => {
        document.querySelector('.designer2').innerText = eighthText;
    }, intervalTime * 11);
    setTimeout(() => {
        document.querySelector('.designer2').innerText = ninthText;
    }, intervalTime * 14);
}
setInterval(() => {
    // displayText();
    displayText2();
}, intervalTime * 7);

/*------------------------------------- Whole Page Scrolling Animation -------------------------------------*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down');
hiddenElements.forEach((el) => observer.observe(el));

/*------------------------------------- Infinite Marquee -------------------------------------*/
document.querySelectorAll('.logos').forEach(function (logosContainer) {
    const copy = logosContainer.querySelector('.logos-slide').cloneNode(true);
    logosContainer.appendChild(copy);
});

/*------------------------------------- Skill Bar Circular -------------------------------------*/
// REMOVED First CIRCULAR progress BAR ANIMATION
// document.addEventListener("DOMContentLoaded", function () {
//     const progressSection = document.querySelector("#progress");
//     const items = document.querySelectorAll('.progress-item');
//     const colors = ['#BCE70C', '#FF759C', '#00CC97', '#FFDB59', '#6F39FD', '#FF7D61'];
//     const observerOptions = { threshold: 0.1 };
//     function handleIntersection(entries, observer) {
//         if (entries[0].isIntersecting) {
//             items.forEach((item, index) => {
//                 let num = parseInt(item.dataset.num);
//                 let count = 0;
//                 let color = colors[index % colors.length];
//                 let interval = setInterval(() => {
//                     if (count === num) {
//                         clearInterval(interval);
//                     } else {
//                         count++;
//                         item.style.background = `conic-gradient(${color} ${count}%, #80808047 0deg)`;
//                         item.setAttribute('data-value', `${count}%`);
//                         item.innerHTML = `${count}%`;
//                     }
//                 }, 15);
//             });
//             observer.unobserve(progressSection);
//         }
//     }
//     const observer = new IntersectionObserver(handleIntersection, observerOptions);
//     observer.observe(progressSection);
// });

/*------------------------------------- Container PopUp -------------------------------------*/
// $(document).ready(function () {
//     $('.popup-btn').click(function (e) {
//         $('.popup-wrap').fadeIn(500);
//         $('.popup-box').removeClass('transform-out').addClass('transform-in');
//         e.preventDefault();
//     });

//     $('.popup-close').click(function (e) {
//         $('.popup-wrap').fadeOut(500);
//         $('.popup-box').removeClass('transform-in').addClass('transform-out');
//         e.preventDefault();
//     });
// });


$(document).ready(function () {
    // Open popup when clicking a popup button
    $('.popup-btn').click(function (e) {
        // Find which popup type this button belongs to
        var popupClasses = $(this).attr('class').split(' ');
        var targetPopupClass = '';
        
        // Find the specific popup class (starts with 'popup-' but isn't 'popup-btn')
        $.each(popupClasses, function(index, className) {
            if (className.startsWith('popup-') && className !== 'popup-btn') {
                targetPopupClass = className;
                return false; // Break the loop once found
            }
        });
        
        // If no specific class found, use default behavior
        if (!targetPopupClass) {
            $('.popup-wrap').fadeIn(500);
        } else {
            // Find the matching popup container
            $('.popup-wrap.' + targetPopupClass).fadeIn(500);
            $('.popup-wrap.' + targetPopupClass + ' .popup-box').removeClass('transform-out').addClass('transform-in');
        }
        
        e.preventDefault();
    });

    // Close popup when clicking the close button
    $('.popup-close').click(function (e) {
        // Find the parent popup-wrap
        var popupWrap = $(this).closest('.popup-wrap');
        
        // Fade out and transform
        popupWrap.fadeOut(500);
        popupWrap.find('.popup-box').removeClass('transform-in').addClass('transform-out');
        
        e.preventDefault();
    });
    
    // Close popup when clicking outside the popup box
    $(document).on('click', '.popup-wrap', function(e) {
        // If the clicked element is the popup-wrap itself (the overlay area)
        // and not a child element of popup-box
        if ($(e.target).hasClass('popup-wrap') && !$(e.target).closest('.popup-box').length) {
            // Fade out and transform
            $(this).fadeOut(500);
            $(this).find('.popup-box').removeClass('transform-in').addClass('transform-out');
        }
    });
});
/*------------------------------------- Pop Videos -------------------------------------*/
$(document).ready(function () {
    $('#vimeo').magnificPopup({
        items: {
            src: 'https://vimeo.com/259411563'
        },
        type: 'iframe'
    });

    $('.youtube-office365-fluentsmtp').magnificPopup({
        items: {
            src: 'https://www.youtube.com/watch?v=KvLbGegHOa8'
        },
        type: 'iframe'
    });

    $('.soundcloud').magnificPopup({
        type: 'soundcloud',
        items: {
            src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/163522130&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
        },
        type: 'iframe',
    });
});

/*------------------------------------- Gallary Fancy Box  -------------------------------------*/
window.addEventListener("load", () => {
    for (let i of document.querySelectorAll(".gallery img")) {
        i.onclick = () => i.classList.toggle("full");
    }
});

$('[data-fancybox="gallery"]').fancybox({
    buttons: [
        "slideShow",
        "thumbs",
        "zoom",
        "fullScreen",
        "share",
        "close"
    ],
    loop: false,
    protect: true
});

/*------------------------------------- Timeline Start -------------------------------------*/

/*------------------------------------- Timeline End -------------------------------------*/
/*------------------------------------- Testimonial Slider -------------------------------------*/
$(document).ready(function () {
    $('.Testimonials').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        speed: 2000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    arrows: false,
                }
            }
        ]
    });
});

/*------------------------------------- Form Input Animtion -------------------------------------*/
// $('input').focus(function () {
//     $(this).parent().addClass('active');
//     $('input').focusout(function () {
//         if ($(this).val() == '') {
//             $(this).parent().removeClass('active');
//         } else {
//             $(this).parent().addClass('active');
//         }
//     })
// });

/*------------------------------------- Menu Toggle -------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.querySelector('.side-menu');
    const menuItems = document.querySelectorAll('.menu-list-main li');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        sideMenu.classList.toggle('show');
    });
    menuItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.querySelector('a').getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
            menuToggle.classList.remove('open');
            sideMenu.classList.remove('show');
        });
    });
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
    });
});

/*------------------------------------- Scroll To Top -------------------------------------*/

/*------------------------------------- Scroll to top -------------------------------------*/
/*------------------------------------- Lazyload delayed initializer with other animation -------------------------------------*/

// Check if jQuery is loaded
if (typeof jQuery === 'undefined') {
    console.error('jQuery is not loaded');
  }
  
$(document).ready(function() {
// For each image with data-src attribute
    $("img[data-src]").each(function() {
        const img = this;
        const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            img.src = $(img).attr('data-src');
            observer.disconnect();
            }
        });
        });
        observer.observe(img);
    });
});