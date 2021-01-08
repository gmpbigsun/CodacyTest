var express = require('express');
var app     = express();
var server  = require('http').createServer(app);
var io      = require('socket.io')(server);

//Add recent chats to messages array
var messages  = [];
var prevChats = 10;
var storeMessage = function(name, data){
  messages.push({name: name, data: data});
  if (messages.length > prevChats) {
    messages.shift();
  }
};

//Setup the app with Express
app.use(express.static(__dirname + '/public'));

//Socket.io
io.on('connection', function(socket){

  //Log activity
  socket.on('join', function(name){
    socket.userName = name;
    socket.broadcast.emit('chat', name + ' has joined the chat');
    console.log(name + ' has joined the chat');

    //Log who has left
    socket.on('disconnect', function(){
      socket.broadcast.emit('chat', name + ' has left the chat');
      console.log(name + ' has left the chat');
    });
  });

  //Log chats
  socket.on('chat', function(message){
    io.emit('chat', socket.userName + ': ' + message);
    storeMessage(socket.userName, message);
    console.log(socket.userName + ': ' + message);
  });

  //Log previous chats for new users
  messages.forEach(function(message){
    socket.emit('chat', message.name + ': ' + message.data);
  });
});

//Listen at localhost:3000
server.listen(3000, function(){
  console.log('listening on *:3000');
});

// trigger quotes

function quotes1() 
{
	return 'test';
}

// trigger complexity.
function complexity1( a,  b, c, d, e, f, g, h, i,j,k,l){
	return a+b+c+d+e+f+g+h+i+j+k+l;
}

function complexity2( a,  b, c, d, e, f, g, h, i,j,k,l){
	return a-b-c-d-e-f-g-h-i-j-k-l;
}

// trigger duplication
//test
function duplicate1( a,  b){
	var c = a+b+a+b;
	return c;
}

function duplicate2( c,  d){
	var e = c+d+c+d;
	return e;
}

function duplicate3( c,  d){
	var e = c+d+c+d;
	return e;
}

function duplicate4( c,  d){
	var e = c+d+c+d;
	return e;
}
//test
function duplicate5( a,  b){
	var c = a+b+a+b;
	return c;
}

function duplicate6( c,  d){
	var e = c+d+c+d;
	return e;
}

function duplicate7( c,  d){
	var e = c+d+c+d;
	return e;
}

function duplicate8( c,  d){
	var e = c+d+c+d;
	return e;
}
function duplicate9( c,  d){
	var e = c+d+c+d;
	return e;
}

function duplicate10( c,  d){
	var e = c+d+c+d;
	return e;
}

function duplicate11( c,  d){
	var e = c+d+c+d;
	return e;
}//test
function duplicate12( a,  b){
	var c = a+b+a+b;
	return c;
}

function duplicate13( c,  d){
	var e = c+d+c+d;
	return e;
}

function duplicate14( c,  d){
	var e = c+d+c+d;
	return e;
}

function duplicate15( c,  d){
	var e = c+d+c+d;
	return e;
}//test
function duplicate16( a,  b){
	var c = a+b+a+b;
	return c;
}

function duplicate17( c,  d){
	var e = c+d+c+d;
	return e;
}

function duplicate18( c,  d){
	var e = c+d+c+d;
	return e;
}

function duplicate19( c,  d){
	var e = c+d+c+d;
	return e;
}//test
function duplicate20( a,  b){
	var c = a+b+a+b;
	return c;
}

function duplicate21( c,  d){
	var e = c+d+c+d;
	return e;
}

function duplicate22( c,  d){
	var e = c+d+c+d;
	return e;
}

// trigger complexity.
function complexity1( a,  b, c, d, e, f, g, h, i,j,k,l){
	return a+b+c+d+e+f+g+h+i+j+k+l;
}

function complexity2( a,  b, c, d, e, f, g, h, i,j,k,l){
	return a-b-c-d-e-f-g-h-i-j-k-l;
}

// trigger duplication
//test
function duplicate1( a,  b){
	var c = a+b+a+b;
	return c;
}

function duplicate2( c,  d){
	var e = c+d+c+d;
	return e;
}

function duplicate3( c,  d){
	var e = c+d+c+d;
	return e;
}

function duplicate4( c,  d){
	var e = c+d+c+d;
	return e;
}
//test
function duplicate5( a,  b){
	var c = a+b+a+b;
	return c;
}

function duplicate6( c,  d){
	var e = c+d+c+d;
	return e;
}

function duplicate7( c,  d){
	var e = c+d+c+d;
	return e;
}

function duplicate8( c,  d){
	var e = c+d+c+d;
	return e;
}
function duplicate9( c,  d){
	var e = c+d+c+d;
	return e;
}

function duplicate10( c,  d){
	var e = c+d+c+d;
	return e;
}

function duplicate11( c,  d){
	var e = c+d+c+d;
	return e;
}//test
function duplicate12( a,  b){
	var c = a+b+a+b;
	return c;
}

function duplicate13( c,  d){
	var e = c+d+c+d;
	return e;
}

function duplicate14( c,  d){
	var e = c+d+c+d;
	return e;
}

function duplicate15( c,  d){
	var e = c+d+c+d;
	return e;
}//test
function duplicate16( a,  b){
	var c = a+b+a+b;
	return c;
}

function duplicate17( c,  d){
	var e = c+d+c+d;
	return e;
}

function duplicate18( c,  d){
	var e = c+d+c+d;
	return e;
}

function duplicate19( c,  d){
	var e = c+d+c+d;
	return e;
}//test
function duplicate20( a,  b){
	var c = a+b+a+b;
	return c;
}

function duplicate21( c,  d){
	var e = c+d+c+d;
	return e;
}

function duplicate22( c,  d){
	var e = c+d+c+d;
	return e;
}
