
angular.module('app').factory('$character', function($http, $state){
  return {
    list: function(){
      return $http.get('/api/c').then(function(data){return data.data});
    },
    get: function(id){
      return $http.get('/api/c/'+id).then(function(data){return data.data});
    }
  };
});