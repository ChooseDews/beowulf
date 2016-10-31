angular.module('app').controller('editCharController', function ($scope, $character, $stateParams, Upload) {
  
  
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

$scope.addRelationship = function(){
  if(!$scope.character.relationships) $scope.character.relationships = [];
  $scope.character.relationships.push({});
}


    $scope.upload = function (file) {
        Upload.upload({
            url: 'upload/url',
            data: {file: file, 'username': $scope.username}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };



});