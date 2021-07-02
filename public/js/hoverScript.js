new hoverEffect ({
    parent: document.querySelector('.img'),
    intensity: 1,
    imagesRatio: 1.2,
    image1: '../public/images/aboutme2.png',
    image2: '../public/images/aboutme1.png',
    displacementImage: '../public/images/diss.png',
    
});

// services section start //
/* 

_ photography servicers
- video servicers
- digital servicers

*/

// photography servicers //
let myPhotographylService = new hoverEffect({
    parent: document.querySelector('.photography'),
    image1: '../public/images/servicesPhotographOne.jpg',
    image2: '../public/images/servicesPhotographTwo.jpg',
    displacementImage: '../public/images/photographyDisplacement.png',
});
setInterval(() => {
    myPhotographylService.next()
}, 3300);
setInterval(() => {
    myPhotographylService.previous()
}, 6600);

// video servicers //
let myVideographylService = new hoverEffect({
    parent: document.querySelector('.videography'),
    image1: '../public/images/servicesVideoOne.jpg',
    image2: '../public/images/servicesVideoTwo.jpg',
    displacementImage: '../public/images/diss.png',
});
setInterval(() => {
    myVideographylService.next()
}, 3500);
setInterval(() => {
    myVideographylService.previous()
}, 7000);

// digital servicers //
let myDigitalService = new hoverEffect({
    parent: document.querySelector('.digital'),
    image1: '../public/images/servicesDigitalOne.jpg',
    image2: '../public/images/servicesDigitalTwo.jpg',
    displacementImage: '../public/images/codeDisplacement.png',
});
setInterval(() => {
    myDigitalService.next()
}, 3700);
setInterval(() => {
    myDigitalService.previous()
}, 7400);

// services section end //

 