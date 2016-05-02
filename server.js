var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

var todos = require('./routes/todos');

// child process
var exec = require('child_process').exec


app.use('/app', express.static(path.join(__dirname,'/app')));
app.use('/bootstrap', express.static(path.join(__dirname,'/bootstrap')));
app.use('/views', express.static(path.join(__dirname,'/views')));
app.use('/angular2', express.static(path.join(__dirname,'/angular2')));

app.use('/api', todos);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(3000, function(){
	exec('start http://localhost:3000');
});
