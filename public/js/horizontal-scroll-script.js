// smooth scroll 
const scroll = new LocomotiveScroll({
    el: document.querySelector('#js-scroll'),
    smooth: true,
    smoothMobile: true,
    inertia: 0.75
});

// project subtitle animation 
TweenMax.from(".project__container-subtitle", 3, {
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
});
TweenMax.from(".projects", 3, {
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
});
TweenMax.from(".navigation-list", 3, {
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
});

