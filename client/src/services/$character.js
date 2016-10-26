
angular.module('app').factory('$character', function($http, $state){
  return {
    list: function(){
      return $http.get('/api/c').then(function(data){return data.data});
    },
    get: function(id){
      return $http.get('/api/c/'+id).then(function(data){return data.data});
    },
    update: function(char){
      return $http.post('/api/c/'+char.id, char).then(function(data){return data.data});
    },
    create: function(){
      return $http.get('/api/c/create').then(function(data){return data.data});
    },
    delete: function(id){
      return $http.get('/api/c/delete/'+id).then(function(data){return data.data});
    }
  };
});