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
      link: function (scope, element, attrs) {
        scope.$watch(
        function(scope) {
          return scope.$eval(attrs.term);
        }, function(){
            scope.$parent.getTermPosts({
            type: 'jetpack-portfolio',
            'term[jetpack-portfolio-type]': attrs.term
          }, function(res) {
            scope.termItems = res;
          });
        });
      }
    };
  });
