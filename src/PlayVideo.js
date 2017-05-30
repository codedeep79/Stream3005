function playVideo(stream, tag){
    const video = document.querySelector(tag);
    video.srcObject = stream;
    video.onloadedmetadata = (e) => {
        video.play();
    }  
}

module.exports = playVideo;