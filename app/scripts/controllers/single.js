'use strict';

/**
 * @ngdoc function
 * @name angularWpClientApp.controller:SingleCtrl
 * @description
 * # SingleCtrl
 * Controller of the angularWpClientApp
 */
angular.module('angularWpClientApp')
  .controller('SingleCtrl', function ($scope, posts, $stateParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    posts.get({
      post_id: $stateParams.post_id
    }, function(res) {
      $scope.post = res;
      $scope.meta.pageTitle = res.title;
      if (res.hasOwnProperty('post_thumbnail')) {
        $scope.meta.img = res.post_thumbnail.URL;
      }
      console.log($scope.meta.img);
    });
  });
