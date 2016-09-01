'use strict';

/**
 * @ngdoc overview
 * @name angularWpClientApp
 * @description
 * # angularWpClientApp
 *
 * Main module of the application.
 */
angular
  .module('angularWpClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'config'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('single', {
        url: '/p/:post_id/:slug',
        templateUrl: 'views/single.html',
        controller: 'SingleCtrl'
      })
      .state('term', {
        url: 'term/:taxonomy/:term',
        templateUrl: 'views/term.html',
        controller: 'termCtrl'
      })
    ;
    $urlRouterProvider.otherwise('/');

  })
  .filter('thumb', function() {
    return function(i, w, h, crop) {
      return i+'?w='+w+'&h='+h+'&crop='+crop;
    };
  })
;
