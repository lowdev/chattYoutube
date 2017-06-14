var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http)

app.get('/', function(req, res){
  res.send('<h1>Salut, je suis la premiere page Web de Alex. A la connexion je dis "Bonjour".</h1>');
});

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

io.on('connection',function(socket){
  console.log('You just connected');
    socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
  
http.listen(3000, function(){
  console.log('listening on *:3000');
});
