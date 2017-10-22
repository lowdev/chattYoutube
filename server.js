// server.js
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const path = require('path');

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

var currentState = { playerState: "", videoId: "" };

io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('add-message', (message) => {
    currentState = message;
    io.emit('message', {type:'new-message', text: message});
  });

  socket.on('player-ready', (message) => {
    socket.emit('message', {type:'new-message', text: { playerState: -2, videoId: currentState["videoId"], currentTime: currentState["currentTime"] } });
  });
});

// Start the app by listening on the default
// Heroku port
http.listen(process.env.PORT || 8080, () => {
  console.log('started on port 8080');
});
