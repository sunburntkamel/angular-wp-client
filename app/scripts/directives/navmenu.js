'use strict';

/**
 * @ngdoc directive
 * @name angularWpClientApp.directive:navMenu
 * @description
 * # navMenu
 */
angular.module('angularWpClientApp')
  .directive('navMenu', function () {
    return {
      templateUrl: '/views/nav-menu.html',
      restrict: 'E'
    };
  });
