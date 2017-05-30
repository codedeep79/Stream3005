function playVideo(stream, id){
    const video = document.getElementById(id);
    video.srcObject = stream;
    video.onloadedmetadata = (e) => {
        video.play();
    }  
}

module.exports = playVideo;