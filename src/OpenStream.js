const playVideo = require("./playVideo");
const Peer = require("simple-peer");
const $ = require('jquery');

      

function openStream() {
    navigator.mediaDevices.getUserMedia({ audio: false, video: true })
        .then((stream) => {
            playVideo(stream, "localStream");


            // trickle: Minh viet  chuong trinh khong su dung server ben ngoai
            // nen trickle la false. Nó sẽ làm chương  trình chậm hơn, 40s  
            // mới trả về token
            const peer = new Peer({ initiator: location.hash === '#1',
                 trickle: false, stream});
      
            // Tạo signal data là token
            peer.on("signal", (token) => {
                $("#txtMySignal").val(JSON.stringify(token));
            });

            $("#btnConnect").click(() => {
                const friendSignal = JSON.parse($("#txtFriendSignal").val());
                peer.signal(friendSignal);
            });    

            peer.on('stream', function (stream) {
                playVideo(stream, "friendStream");
            })
    })
    .catch(error => console.log(error));
}

module.exports = openStream;