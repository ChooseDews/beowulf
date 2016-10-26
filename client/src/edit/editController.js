angular.module('app').controller('editListController', function($scope, $character, $timeout, $state) {

  $scope.cs = [];

  $character.list().then(function(data) {
    console.log(data);
    $scope.cs = data;
  })

  $scope.createNew = function() {
    $character.create().then(function(data) {
      $state.go('edit_char', {
        character: data.id
      })
    })

  }

  $scope.delete = function(id) {
    $character.delete(id).then(function(data) {
      $scope.cs = data;
    })
  }


});