'use strict';

/**
 * @ngdoc directive
 * @name angularWpClientApp.directive:termList
 * @description
 * # termList
 */
angular.module('angularWpClientApp')
  .directive('termList', function () {
    return {
      templateUrl: '/views/term-list.html',
      restrict: 'E',
      scope: {
        term: '@'
      },
      controller: 'TermlistCtrl',
      link: function postLink(scope, element, attrs) {
        console.log('link func '+attrs.term);
        scope.getPosts(attrs.term);
        // element.text('this is the termList directive');
      }
    };
  });
