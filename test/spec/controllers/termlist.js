'use strict';

describe('Controller: TermlistCtrl', function () {

  // load the controller's module
  beforeEach(module('angularWpClientApp'));

  var TermlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TermlistCtrl = $controller('TermlistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
