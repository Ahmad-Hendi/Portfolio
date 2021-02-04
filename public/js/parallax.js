function splitScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement: '.about-title',
        triggerHook: 0,
    })
    .setPin('.about-title')

    .addTo(controller);

}

splitScroll();

// function bgChanger(){
//     console.log("working");
//     if(this.scrollY < this.innerHeight){
//         document.querySelector('.container-service').classList.add("bg-color");
//     }else{
//         document.querySelector('.container-service').classList.remove("bg-color");
//     }
// }

// window.addEventListener("scroll", bgChanger);