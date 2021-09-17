
const socket = io();

// to server
function on_typing() {
    $(document).ready(function(){
        text_to_translate = $("#textarea_to_translate").val()
        

    });

    console.log(text_to_translate);
    socket.emit('to_translate_type_event', {text : text_to_translate});
}


// from server: emit('translated_text_is_ready', {'translated_text' : translated_text }) 
socket.on('translated_text_is_ready', function (text) {
    // $(document).ready(function () {
    //     console.log(translated_text);
    // });
    console.log(text.translated_text);
    $("#textarea_translated_text").val(text.translated_text);
    

});


// on_typing()

/* Tasks due for tomorrow
-To make on_typing function
-configure socketio connections btw server and client
-user enters text and gets translated text in the side box in real time
*/