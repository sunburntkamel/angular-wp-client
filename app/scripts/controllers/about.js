'use strict';

/**
 * @ngdoc function
 * @name angularWpClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularWpClientApp
 */
angular.module('angularWpClientApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
