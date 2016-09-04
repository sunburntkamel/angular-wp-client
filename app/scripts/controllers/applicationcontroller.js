'use strict';

/**
 * @ngdoc function
 * @name angularWpClientApp.controller:ApplicationcontrollerCtrl
 * @description
 * # ApplicationcontrollerCtrl
 * Global controller, sets $scope vars and functions for passing data between states.
 */
angular.module('angularWpClientApp')
  .controller('ApplicationcontrollerCtrl', function ($scope, $state, terms) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.uiRouterState = $state;
    $scope.navMenu = [
      {
        id: 843,
        icon: 'fa-list',
        name: 'Resume'
      }
    ];
    $scope.message = {
      text: '',
      status: ''
    };
    $scope.viewName = '';
    $scope.terms = {
      jetpackPortfolioType: {},
      jetpackPortfolioTag: {}
    };
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
      pageTitle: 'Hi, I&#8217;m Amie',
      img: 'https://sunburntkamel.files.wordpress.com/2010/07/cropped-294195815_12efa97007_o.jpg'
    };
    $scope.tmpObj = {
      id: 0,
      type: '',
      object: ''
    };
    terms.get({
      taxonomy: 'jetpack-portfolio-type'
    })
      .$promise
      .then(function(res) {
        for (var i in res.terms) {
          var term = res.terms[i];
          $scope.terms.jetpackPortfolioType[term.slug] = term;
        }
      });
    terms.get({
      taxonomy: 'jetpack-portfolio-tag'
    })
      .$promise
      .then(function(res) {
        for (var i in res.terms) {
          var term = res.terms[i];
          $scope.terms.jetpackPortfolioTag[term.slug] = term;
        }
      });
    $scope.copyright = new Date().getFullYear();
  });
