'use strict';

/**
 * @ngdoc function
 * @name angularWpClientApp.controller:TermlistCtrl
 * @description
 * # TermlistCtrl
 * Controller of the angularWpClientApp
 */
angular.module('angularWpClientApp')
  .controller('TermlistCtrl', function ($scope, posts) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.getPosts = function(term) {
      console.log('getPosts '+term);
      posts.get({
        type: 'jetpack-portfolio',
        term: term
      })
        .$promise
        .then(function(res) {
          $scope.items = res;
        });
    };
  });
