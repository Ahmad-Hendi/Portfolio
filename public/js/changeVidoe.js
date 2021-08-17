
window.addEventListener('load', () => {
    let screenWidth = $(window).width();
    let video = document.querySelector('#resumeVideo')
    if (screenWidth < 700) {
        video.src = '/public/videos/resumeVideo1080.mp4'
        video.play()
        video.playsinline()
        video.autoplay()
        video.muted()
        video.loop()
    }else{
        video.src = '/public/videos/ResumeVideo.mp4'
        video.play()
        video.playsinline()
        video.autoplay()
        video.muted()
        video.loop()
    }
})



