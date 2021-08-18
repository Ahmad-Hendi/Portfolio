TweenMax.staggerFrom(
    ".titles > div",
    0.8,
    {
        x: "-60",
        ease: Power3.easeInOut,
        opacity: "0",
    },
    2
);

TweenMax.staggerTo(
    ".titles > div",
    0.8,
    {
        x: "60",
        ease: Power3.easeInOut,
        delay: 1.2,
        opacity: "0",
    },
    2
);
TweenMax.staggerFrom(
    "li",
    3,
    {
        x: "-1600",
        delay: 4.2,
        ease: Expo.easeInOut,
    },
    0.16
);

TweenMax.staggerTo(
    "li",
    2.6,
    {
        x: "1600",
        delay: 6.8,
        ease: Expo.easeInOut,
    },
    0.2
);
