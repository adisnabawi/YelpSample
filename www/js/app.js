// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('yulpApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home',{
    url:'/home',
    templateUrl:'views/home/home.html',
    abstract: true
  })
  .state('home.feed',{
    url:'/feed',
    views: {
      'tab-feed': {
        templateUrl: 'views/home/feed.html'
      }
    }
  })
  .state('home.feed-details', {
    url: '/feed/:businessId', // url will be /home/feed/1
    views: {
    'tab-feed': {
    templateUrl: 'views/home/feed-details.html'
      }
    }
  })
  .state('home.search',{
    url:'/search',
    views: {
      'tab-search': {
        templateUrl: 'views/home/search.html'
      }
    }
  })
  .state('home.settings', {
    url:'/settings',
    views:{
      'tab-settings' : {
        templateUrl: 'views/home/settings.html'
      }
    }
  });
  $urlRouterProvider.otherwise('/home/feed');
})
