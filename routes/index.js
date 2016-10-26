var express = require('express');
var router = express.Router();
var db = require('./../db.js');

console.log(db);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('API Up and running!');
});

router.get(['/characters', '/c'], function(req, res, next) {
  res.send(db.getCharacters());
});

router.get(['/characters/:id','/c/:id'], function(req, res, next) {
  var id = req.params.id;
  res.send(db.getCharacter(id));
});




module.exports = router;
