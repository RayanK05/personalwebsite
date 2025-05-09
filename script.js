var messageArray = ["Good Day, I'm Rayan"];
var speed = 100;
var textPosition = 0;

const typewriter = () => {
    document.querySelector("#line1").innerHTML =
        messageArray[0].substring(0, textPosition);

    if (textPosition++ !== messageArray[0].length) {
        setTimeout(typewriter, speed);
    }
};

window.addEventListener("load", typewriter);

// $(function(){
//
//     window.sr = ScrollReveal();
//
//     if ($(window).width() < 768) {
//
//         if ($('.timeline-content').hasClass('js--fadeInLeft')) {
//             $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
//         }
//
//         sr.reveal('.js--fadeInRight', {
//             origin: 'right',
//             distance: '300px',
//             easing: 'ease-in-out',
//             duration: 800,
//         });
//
//     } else {
//
//         sr.reveal('.js--fadeInLeft', {
//             origin: 'left',
//             distance: '300px',
//             easing: 'ease-in-out',
//             duration: 800,
//         });
//
//         sr.reveal('.js--fadeInRight', {
//             origin: 'right',
//             distance: '300px',
//             easing: 'ease-in-out',
//             duration: 800,
//         });
//
//     }
//
//     sr.reveal('.js--fadeInLeft', {
//         origin: 'left',
//         distance: '300px',
//         easing: 'ease-in-out',
//         duration: 800,
//     });
//
//     sr.reveal('.js--fadeInRight', {
//         origin: 'right',
//         distance: '300px',
//         easing: 'ease-in-out',
//         duration: 800,
//     });
//
//
// });
