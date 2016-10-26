var low = require('lowdb');
const db = low('db.json');
var Guid = require('guid');
var exports = {};

db.defaults({ characters: [] }).value();


exports.createCharacter = function(character){
    character.id = Guid.create().value;
    db.get('characters').push(character).value();
    return character;
}

exports.getCharacter = function(Cid){
    return db.get('characters').find({ id: Cid }).value();
}

exports.getCharacters = function(){
    return db.get('characters').value();
}

exports.updateCharacter = function(id, update){
    update.id = id;
    return db.get('characters')
  .find({ id: id })
  .assign(update)
  .value() 
}

exports.deleteCharacter = function(id){
   return db.get('characters')
  .remove({ id: id})
  .value() 
}


module.exports = exports;



