angular.module('app').controller('homeController', function ($scope, $character, $timeout) {

$scope.characters = [];
$scope.name = "John";

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

$character.list().then(function(data){
    console.log(data);
    $scope.characters = shuffle(data);
})

$character.get("7fd88371-4876-535c-2e10-fb4ee765f656").then(function(data){
    console.log(data);
})

});