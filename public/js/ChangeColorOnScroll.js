


const projects = document.querySelector('.navigation-wrapper');
const contactMe = document.querySelector('.contact-me');

window.onscroll = function () {

    let bottom = window.scrollY;
    let middle = window.scrollY;

    // console.log(`%c${bottom}`, "font-size: 20px; color:green");
    // console.log(`%c${middle}`, "font-size: 20px; color:red");



    

    if (middle >= 2800){
        projects.classList.add('active')
    }else{
        projects.classList.remove('active')
    }

    if (bottom >= 4630) {
        
        contactMe.classList.add('active')
        
    } else{
        
        contactMe.classList.remove('active')
        }
    }



