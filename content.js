chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    var delay = parseFloat(msg.text);
    if (isNaN(delay)) return;

        var player = document.getElementsByClassName('video-stream html5-main-video')[0];
        delay *=1000;
        document.onkeydown = function(e){
            if (e.which!==13) return;
            player.play();
            setTimeout(pause, delay)
        };
        setTimeout(pause, delay)

        function pause(){player.pause()};
        sendResponse(document.all[0].outerHTML);

});