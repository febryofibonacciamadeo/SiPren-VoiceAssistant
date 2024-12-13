$(document).ready(function() {
    
    $('.description').textillate({
        loop: true,
        sync: true,
        in: {
            effect: "fadeIn"
        },
        out: {
            effect: "fadeOut"
        }
    });

    var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: 640,
        height: 200,
        style: 'ios9',
        amplitude: '1',
        speed: '0.30',
        autostart: true
    });

    $('#MicBtn').click(function() {
        eel.playAssistantSound()
        $('#search-bar').removeClass("search-bar");
        $('#search-bar').attr("hidden", true);
        $('#title').attr("hidden", true);
        $('#text-desc').attr("hidden", false);
        $('#siri-container').attr("hidden", false);
        eel.allCommands()()
    });

    function doc_keyUp(e) {
        if(e.key === 'j' && e.metaKey) {
            eel.playAssistantSound()
            $('#search-bar').removeClass("search-bar");
            $('#search-bar').attr("hidden", true);
            $('#title').attr("hidden", true);
            $('#text-desc').attr("hidden", false);
            $('#siri-container').attr("hidden", false);
            eel.allCommands()()
        }
    }
    document.addEventListener('keyup', doc_keyUp, false);

    function PlayAssistant(message) {

        if (message != "") {

            $("#Oval").attr("hidden", true);
            $("#SiriWave").attr("hidden", false);
            eel.allCommands(message);
            $("#chatbox").val("")
            $("#MicBtn").attr('hidden', false);
            $("#SendBtn").attr('hidden', true);

        }

    }

});


