'use strict';

/**
 * @ngdoc function
 * @name angularWpClientApp.controller:TermCtrl
 * @description
 * # TermCtrl
 * Controller of the angularWpClientApp
 */
angular.module('angularWpClientApp')
  .controller('TermCtrl', function ($scope, posts) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.getPosts = function(term) {
      posts.get({
        type: 'jetpack-portfolio',
        term: term
      })
        .$promise
        .then(function(res) {
          $scope.items = res;
        });
    }
  });
