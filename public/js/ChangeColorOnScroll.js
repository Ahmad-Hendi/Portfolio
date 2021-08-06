



const contactMe = document.querySelector('.contact-me');
const contactMePhone = document.querySelector('.contact-me-phone');

window.onscroll = function () {

    let bottom = window.scrollY;
    let middle = window.scrollY;
    let screenWidth = $(window).width();

    // console.log(`%c${bottom}`, "font-size: 20px; color:green");
    // console.log(`%c${middle}`, "font-size: 20px; color:red");



    

    if (middle >= 2620 && screenWidth > 600  ){
        contactMe.classList.add('active')
        console.log('hello');
    }else{
        contactMe.classList.remove('active')}
    

// if ( bottom >= 1700 && screenWidth < 600 ){
//     console.log('hee');
//     contactMePhone.classList.add('active')
//     }else{
//         contactMePhone.classList.remove('active')
//     }
}


