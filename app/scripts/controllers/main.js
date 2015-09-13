'use strict';

/**
 * @ngdoc function
 * @name angularWpClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWpClientApp
 */
angular.module('angularWpClientApp')
  .controller('MainCtrl', function ($scope, posts) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    posts.get({
      type: 'jetpack-portfolio'
    }, function(res) {
      $scope.items = res.posts;
      $scope.nextPage = res.meta.next_page;
    });
  });
