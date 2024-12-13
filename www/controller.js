$(document).ready(function() {
    
    eel.expose(DisplayMessage)
    function DisplayMessage(message) {
        $('#text-desc').text(message);
        $('#text-desc').textillate('start');
    }

    eel.expose(ShowHood)
    function ShowHood() {
        $('#search-bar').addClass("search-bar");
        $('#search-bar').attr("hidden", false);
        $('#title').attr("hidden", false);
        $('#text-desc').attr("hidden", true);
        $('#siri-container').attr("hidden", true);
    }
});