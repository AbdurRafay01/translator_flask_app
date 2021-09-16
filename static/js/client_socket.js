
// console.log(23213892193);

// $(document).ready(function () {
//     const socket = io();
//     socket.on('connect', function () {
//         console.log('received message');
//         socket.emit('my event', {data : 'Hello world'})
//     });
// });

const socket = io();
socket.on('connect', function () {
    console.log('received message');
    socket.emit('my event', {data : 'Hello world'});
});


function on_typing() {
    
}


/* Tasks due for tomorrow
-To make on_typing function
-configure socketio connections btw server and client
-user enters text and gets translated text in the side box in real time
*/