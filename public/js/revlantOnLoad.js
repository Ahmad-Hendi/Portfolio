console.log("%c", "test", "color:red") ;

// About Me //
// i have to change it later to on scrool //
const img = document.querySelector('.img');
const typing = document.querySelector('.typing');
const developer = document.querySelector('.developer');
const text = document.querySelector('#dev-text');
const cv = document.querySelector('#cv');
const iAm = document.querySelector('#iAm');
const resumeVideo = document.querySelector('#resumeVideo');
const socialMedia = document.querySelector('.socialMedia');
// const slider = document.querySelector('#slider');


// Nav bar
const nav = document.querySelector('.navBar');



const tl = new TimelineMax();

tl.fromTo(resumeVideo, 1, { opacity: 0, ease: Power1.easInOut}, { opacity: 1, ease: Power2.easInOut} )
tl.fromTo(nav, 0.5, { opacity: 0, ease: Power1.easInOut}, { opacity: 1, ease: Power2.easInOut} )
tl.fromTo(socialMedia, 1, { opacity: 0, ease: Power1.easInOut}, { opacity: 1, ease: Power2.easInOut} )
// tl.fromTo(slider, 2, {height: "120%", ease: Power2.easInOut}, {height: "0%", ease: Power2.easInOut, })



tl.fromTo(img, 1, { opacity: 0, ease: Power1.easInOut}, { opacity: 1, ease: Power2.easInOut}, "-=0.6")
tl.fromTo(iAm, 0.5, { opacity: 0, ease: Power1.easInOut}, { opacity: 1, ease: Power2.easInOut}, "-=0.5")
tl.fromTo(typing, 0.5, { opacity: 0, ease: Power1.easInOut}, { opacity: 1, ease: Power2.easInOut}, "-=0.3" )
tl.fromTo(developer, 0.5, { opacity: 0, ease: Power1.easInOut}, { opacity: 1, ease: Power1.easInOut}, "-=0.2")
tl.fromTo(text, 0.5, { opacity: 0, ease: Power1.easInOut}, { opacity: 1, ease: Power2.easInOut} )
tl.fromTo(cv, 0.5, { opacity: 0, ease: Power1.easInOut}, { opacity: 1, ease: Power2.easInOut} )


// Nav bar







