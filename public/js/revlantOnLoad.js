console.log("%c", "test", "color:red") ;

// About Me //
// i have to change it later to on scrool //
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








