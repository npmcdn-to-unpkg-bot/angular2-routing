var express = require('express');
var router = express.Router();
var sqlite = require('sqlite-sync');
sqlite.connect('model/database.db');

router.get('api/persons', function(req, res){
	res.send(sqlite.run('SELECT * FROM person'));
});

module.exports = router;