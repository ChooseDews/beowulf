// Declare app level module which depends on views, and components
angular.module('app', [
  'ui.router',
  'ngTouch',
  'ng-fastclick',
  'angular-loading-bar',
  'ui.materialize',
  'ngFileUpload',
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

  .state('edit', {
    url: "/edit",
    templateUrl: "edit/edit",
    parent: navigation
  })
  
  
  .state('edit_char', {
    url: "/edit/:character",
    templateUrl: "edit/character",
    parent: navigation
  })


  .state('credits', {
    url: "/credits",
    templateUrl: "credits/credit",
    parent: navigation

  })

  .state('characters', {
    url: "/characters",
    templateUrl: "chars/list",
    parent: navigation

  })
  
   .state('character', {
    url: "/character/:id",
    templateUrl: "chars/single",
    parent: navigation

  })
  
   .state('timeline', {
    url: "/timeline",
    templateUrl: "timeline/time",
    parent: navigation

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