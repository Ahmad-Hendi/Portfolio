console.log("%c", "test", "color:red") ;

const img = document.querySelector('.img');
const typing = document.querySelector('.typing');
const developer = document.querySelector('.developer');
const text = document.querySelector('#dev-text');
const cv = document.querySelector('#cv');
const iAm = document.querySelector('#iAm');
const slider = document.querySelector('#slider');

// icons
const iconOne = document.querySelector('#icon-one');
const iconTwo = document.querySelector('#icon-two');
const iconThree = document.querySelector('#icon-three');
const iconFour = document.querySelector('#icon-four');


const tl = new TimelineMax();

tl.fromTo(slider, 2, {height: "120%", ease: Power2.easInOut}, {height: "0%", ease: Power2.easInOut, })



tl.fromTo(img, 1, { opacity: 0, ease: Power1.easInOut}, { opacity: 1, ease: Power2.easInOut}, "-=0.6")
tl.fromTo(iAm, 0.5, { opacity: 0, ease: Power1.easInOut}, { opacity: 1, ease: Power2.easInOut}, "-=0.5")
tl.fromTo(typing, 0.5, { opacity: 0, ease: Power1.easInOut}, { opacity: 1, ease: Power2.easInOut}, "-=0.3" )
tl.fromTo(developer, 0.5, { opacity: 0, ease: Power1.easInOut}, { opacity: 1, ease: Power1.easInOut}, "-=0.2")
tl.fromTo(text, 0.5, { opacity: 0, ease: Power1.easInOut}, { opacity: 1, ease: Power2.easInOut} )
tl.fromTo(cv, 0.5, { opacity: 0, ease: Power1.easInOut}, { opacity: 1, ease: Power2.easInOut} )


// icons
tl.fromTo(iconOne, 1, { opacity: 0, ease: Power1.easInOut}, { opacity: 1, ease: Power2.easInOut}, "-=1.9" )
tl.fromTo(iconTwo, 1, { opacity: 0, ease: Power1.easInOut}, { opacity: 1, ease: Power2.easInOut}, "-=1.6" )
tl.fromTo(iconThree, 1, { opacity: 0, ease: Power1.easInOut}, { opacity: 1, ease: Power2.easInOut}, "-=1.4" )
tl.fromTo(iconFour, 1, { opacity: 0, ease: Power1.easInOut}, { opacity: 1, ease: Power2.easInOut}, "-=1.2" )



