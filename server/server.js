const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

var {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath)); //This will be the root of our web app (front end)

io.on('connection', (socket) => {
  console.log('New user connected');
  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));
  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    //Sharing
    io.emit('newMessage', generateMessage(message.from, message.text));
    /*Broadcasting
    socket.broadcast.emit('newMessage', {
      from: message.me,
      text: message.text,
      createdAt: new Date().getTime()
    });
    */
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected')
  });
});



server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
