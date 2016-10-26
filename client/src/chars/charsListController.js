angular.module('app').controller('charsListController', function ($scope, $character, $timeout) {

$scope.characters = [];
$scope.search = {};

$character.list().then(function(data){
    console.log(data);
    $scope.characters = data;
});


});