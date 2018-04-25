var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');
});

socket.on('disconnect', function() {
  console.log('Disconnected from server')
});


socket.on('newMessage', function(message) { //custom method  //Since this time we are sending data with the emition, we can declare a variable to use internally containing such data
  console.log('New message', message)
});
