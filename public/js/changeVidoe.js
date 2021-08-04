
window.addEventListener('load', () => {
    let screenWidth = $(window).width();
    let video = document.querySelector('#resumeVideo')
    if (screenWidth < 700) {
        video.src = '/public/videos/resumeVideo1080.mp4'
        video.play()
    }else{
        video.src = '/public/videos/ResumeVideo.mov'
        video.play()
    }
})



