'use strict';

/**
 * @ngdoc function
 * @name angularWpClientApp.controller:TermCtrl
 * @description
 * # TermCtrl
 * Controller of the angularWpClientApp
 */
angular.module('angularWpClientApp')
  .controller('TermCtrl', function ($scope, $stateParams, posts) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.getTermPosts = function(taxonomy, term) {
      var termKey = 'term['+taxonomy+']';
      var requestObj = {
        type: 'jetpack-portfolio'
      };
      requestObj[termKey] = term;
      posts.get(requestObj, function(res) {
          $scope.items = res;
          console.log(res);
      });
    };
    // init
    $scope.getTermPosts($stateParams.taxonomy, $stateParams.terms);
  });
