var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server); // it was require('socket.io')(server);

server.listen(3000);

io.on('connection', function(socket){
    console.log('an user connected');

    //event name,message
    socket.emit('welcome','hosgeldin');

    //event name,message
    socket.broadcast.emit('participate','biri katildi');

    /*
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
    */
   
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
});