'use strict';

describe('Controller: ApplicationcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('angularWpClientApp'));

  var ApplicationcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApplicationcontrollerCtrl = $controller('ApplicationcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
