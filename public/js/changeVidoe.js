
window.addEventListener('resize', () => {
    let screenWidth = $(window).width();
    let video = document.querySelector('#resumeVideo')
    if (screenWidth < 600) {
        video.src = '/public/videos/resumeVideo1080.mp4'
    }else{
        video.src = '/public/videos/ResumeVideo.mov'
    }
})



