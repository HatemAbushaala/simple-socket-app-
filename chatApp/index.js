const express = require('express');

let app = new express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static(`public`));

var PORT = 5050;

var server = app.listen(PORT, () => {
  console.log('Server started on port ' + PORT);
});

const socket = require('socket.io');

var io = socket(server);

io.on('connection', (connection) => {
  //console.log('socket connection start', connection.id);
  connection.on('chat', (data) => {
    console.log(data);
    io.sockets.emit('chat', data);
  });
});
