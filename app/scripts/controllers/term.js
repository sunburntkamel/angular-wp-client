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
    console.log('termCtrl');
    $scope.term = $scope.terms.jetpackPortfolioType[$stateParams.term];
    $scope.getTermPosts = function(taxonomy, term) {
      console.log('getTermPosts '+taxonomy+' '+term);
      var termKey = 'term['+taxonomy+']';
      var requestObj = {
        type: 'jetpack-portfolio'
      };
      requestObj[termKey] = term;
      posts.get(requestObj, function(res) {
          $scope.termPageItems = res.posts;
          console.log(res);
      });
    };
    // init
    $scope.getTermPosts($stateParams.taxonomy, $stateParams.term);
  });
