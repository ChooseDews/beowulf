angular.module('app').controller('charsSingleController', function ($scope, $character, $stateParams) {

  var characterId = $stateParams.id;


$character.get(characterId).then(function(data){
  console.log(data);
  if(data.evil == "true") data.evil = true;
    $scope.character = data;
})



});