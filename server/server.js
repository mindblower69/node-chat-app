const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath)); //This will be the root of our web app (front end)

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {//custom emit same name as custom listener client side, the second argument can be any form of value, but for data usually it would be an object as shown here
    from: '4502644188',
    text: 'Hey its Gian from Match.com',
    createdAt: 123
  });

  socket.on('createMessage', (createMessage) => {
    console.log('createMessage', createMessage);
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected')
  });
});



server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
