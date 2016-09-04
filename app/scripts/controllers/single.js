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
    $scope.attachArray = [];
    $scope.terms = {};
    $scope.featuredImage = -1;
    posts.get({
      post_id: $stateParams.post_id
    }, function(res) {
      $scope.post = res;
      $scope.meta.pageTitle = res.title;
      if (res.hasOwnProperty('post_thumbnail')) {
        $scope.meta.img = res.post_thumbnail.URL;
      }
      // need attachments in an array to do next/prev
      for (var key in res.attachments){
        $scope.attachArray.push(res.attachments[key]);
      }
      console.log($scope.attachArray);
      if (res.attachment_count === 1) {
        $scope.featuredImage = 0;
      }
    });
    $scope.showFeatImage = function(arrayPos) {
      $scope.featuredImage = arrayPos;
    };
  });
