function openCamera(){
    navigator.mediaDevices.getUserMedia({audio: false, video: true})
        .then( (stream) => {
                    const video = document.querySelector("video");
                    video.srcObject = stream;
                    video.onloadedmetadata = (e) => {
                        video.play();
                }  
            })
        .catch(error => console.log(error));
}

module.exports = openCamera;