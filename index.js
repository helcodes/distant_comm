var express = require('express');
var app = express();

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


app.get('/example',(req,res)=> {
    res.sendFile("public/example.html", {root: __dirname});
});


app.get('/:yourName',(req,res)=> {
    res.send("Webserver..."+req.params.yourName);
});

//alle files in publc einbinden
app.use(express.static("public"));

app.listen(8080,()=>console.log("running on port 8080"));


module.exports = app;
