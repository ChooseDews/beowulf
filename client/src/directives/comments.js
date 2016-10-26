angular.module('app').directive('comments', function() {
  return {
		restrict: 'E',
transclude: true,
		scope: {

		 },
    templateUrl: 'directives/comments'
  };
});