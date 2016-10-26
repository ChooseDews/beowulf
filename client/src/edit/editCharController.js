angular.module('app').controller('editCharController', function ($scope, $character, $stateParams) {
  
  
  var characterId = $stateParams.character;

$character.get(characterId).then(function(data){
  console.log(data);
  if(data.evil == "true") data.evil = true;
    $scope.character = data;
})


$scope.update = function(char){
  
  
  $character.update(char).then(function(data){
  console.log(data);
    $scope.character = data;
})
  
  
}


});