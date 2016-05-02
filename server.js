var express = require('express');
var app = express();
var sqlite = require('sqlite-sync');
var path = require('path');
 // child process
 var exec = require('child_process').exec

sqlite.connect('model/database.db');

app.use('/app', express.static(path.join(__dirname,'/app')));
app.use('/bootstrap', express.static(path.join(__dirname,'/bootstrap')));
app.use('/views', express.static(path.join(__dirname,'/views')));
app.use('/angular2', express.static(path.join(__dirname,'/angular2')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('api/persons', function(req, res){
	res.send(sqlite.run('SELECT * FROM person'));
});

app.post('/person', function(req, res){

});

app.put('/person/?id', function(req, res){
	
});

app.delete('/person/?id', function(req, res){
	
});

app.listen(3000, function(){
	exec('start http://localhost:3000');
});
