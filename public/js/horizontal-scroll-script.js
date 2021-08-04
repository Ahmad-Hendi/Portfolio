// smooth scroll 
const scroll = new LocomotiveScroll({
    el: document.querySelector('#js-scroll'),
    smooth: true,
    smoothMobile: true,
    inertia: 0.75
});

// project title animation 
var textWrapper = document.querySelector('.anime-js-title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
    .add({
        targets: '.anime-js-title .letter',
        translateY: [60, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 600 + 30 * i
    });

// project subtitle animation 
TweenMax.from(".project__container-subtitle", 2, {
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
});

// project image fade 
TweenMax.from(".project__image-one", 2, {
    opacity: 0,
    ease: Expo.easeInOut
});