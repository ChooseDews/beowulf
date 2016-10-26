// Declare app level module which depends on views, and components
angular.module('app', [
  'ui.router',
  'ngTouch',
  'ng-fastclick',
  'angular-loading-bar',
  'ui.materialize',
  'ngMap'
]).config(function($stateProvider, $urlRouterProvider) {


  var navigation = {
    name: 'navigation',
    templateUrl: 'navigation/nav'
  }

  $urlRouterProvider.otherwise("/");
  $stateProvider

    .state(navigation)

  .state('home', {
    url: "/",
    templateUrl: "home/home",
    parent: navigation
  })

  .state('login', {
    url: "/login",
    templateUrl: "login/login"
  })




  .state('orders', {
    url: "/orders",
    templateUrl: "orders/list",
    parent: navigation

  })

  .state('customer', {
    url: "/customer",
    templateUrl: "customers/customer",
    parent: navigation

  })
  
   .state('reports', {
    url: "/reports",
    templateUrl: "reports/report",
    parent: navigation

  })
  
   .state('logs', {
    url: "/logs",
    templateUrl: "logs/logs",
    parent: navigation

  })
  
  
  .state('test', {
    url: "/test",
    templateUrl: "customers/test",

  })


  ;



})



.controller('rootController', function($scope, $state, $print) {
  var sideOld;
  var contentOld;
  
   $scope.random = {};
    $scope.$print = $print;

  
  $scope.$state = $state;
  
  console.log($state.includes('ord'))
  
  $scope.openSide = function() {
    if(Number($(window).width()) < 600){
      
            $('.button-collapse').sideNav('show');

    }

  }
  
  $scope.closeSide = function(){
      $('.button-collapse').sideNav('hide');
     $('#sidenav-overlay').fadeOut();
  }

  $scope.toggleNav = function() {

    var closed = $('#sidenav').hasClass('closed');
     


    if (closed) {
      $('#sidenav').show();
      $('#sidenav').animate({
        'margin-left': '0px'
      }, 500, function(){
        $(this).css('margin-left', "");
      });

      
      $('#content').animate({
        width: contentOld
      }, 500, function(){
        $(this).css("width", "");
      });

    } else {

      sideOld = $('#sidenav').css("width");
      contentOld = $('#content').css("width");
      $('#sidenav').animate({
        'margin-left': '-'+sideOld
      }, 500, function(){
        $(this).hide();
      });

      
      $('#content').animate({
        width: '100%'
      }, 500);


    }
    
        $('#sidenav').toggleClass('closed');


  }


});