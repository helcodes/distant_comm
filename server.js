/*var express = require('express');
var app = express();

app.set("view engine", "ejs");

app.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send("first node.js webserver")
});*/

// Handling get request
/*app.get("/" , (req,res)=>{
  res.send("Welcome to GeeksforGeeks Video Call App");
  });*/
  
/*app.get('/example',(req,res)=> {
    res.sendFile("public/example.html", {root: __dirname});
});*/

/*app.get('/:yourName',(req,res)=> {
    res.send("Webserver..."+req.params.yourName);
});*/

/*//alle files in publc einbinden
app.use(express.static("public"));
app.listen(8080,()=>console.log("running on port 8080"));
module.exports = app;
*/

// Importing express module
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const {v4:uuidv4} = require('uuid');
const {ExpressPeerServer} = require('peer')
const peer = ExpressPeerServer(server, {
  debug:true
});

app.use('/peerjs',peer);
app.set('view engine', 'ejs');

// Calling the public folder
app.use(express.static('public'));

// Handling get request
app.get('/' , (req,res)=>{
  res.send(uuidv4());
//res.send("Welcome to GeeksforGeeks Video Call App");
});
app.get('/:room', (req,res)=>{
  res.render('index', {RoomId:req.params.room});
});
// Listing the server
//app.listen(4000 , ()=>{console.log("Server running on port 4000");})

io.on("connection" , (socket)=>{
	socket.on('newUser' , (id, room)=>{
		socket.join(room);
		//socket.to(room).broadcast.emit(1);
		socket.to(room).broadcast.emit('userJoined' , id);
    socket.on('disconnect', ()=>{
      //socket.to(room).broadcast.emit(1);
      socket.to(room).broadcast.emit('userDisconnect',id);
    })
	})
})

server.listen(4000 , ()=>{console.log('Server running on port 4000');});
