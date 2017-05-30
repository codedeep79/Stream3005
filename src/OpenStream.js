const playVideo = require("./playVideo");

function openStream(){
    navigator.mediaDevices.getUserMedia({audio: false, video: true})
        .then( (stream) => playVideo(stream, "video"))
        .catch(error => console.log(error));
}

module.exports = openStream;