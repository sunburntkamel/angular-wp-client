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
    $scope.meta.img = 'https://sunburntkamel.files.wordpress.com/2010/07/cropped-294195815_12efa97007_o.jpg';
    $scope.meta.pageTitle = 'Hi, I&#8217;m Amie';
    $scope.getTermPosts = posts.get;
  });
