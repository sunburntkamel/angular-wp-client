'use strict';

/**
 * @ngdoc function
 * @name angularWpClientApp.controller:ApplicationcontrollerCtrl
 * @description
 * # ApplicationcontrollerCtrl
 * Controller of the angularWpClientApp
 */
angular.module('angularWpClientApp')
  .controller('ApplicationcontrollerCtrl', function ($scope, $state) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.uiRouterState = $state;$scope.message = {
      text: '',
      status: ''
    };
    $scope.viewName = '';
    $scope.clearMsg = function() {
      $scope.message = {
        text: '',
        status: ''
      };
    };
    $scope.messageClass = function(messageStatus) {
      var messageClasses = '';
      if (messageStatus==='error'){
        messageClasses += 'bg-danger text-danger';
      }
      if (messageStatus==='success') {
        messageClasses += 'bg-success text-success';
      }
      return messageClasses;
    };
    $scope.meta = {
      pageTitle: ''
    };
    $scope.tmpObj = {
      id: 0,
      type: '',
      object: ''
    };
  });
