'use strict';

describe('Controller: TermCtrl', function () {

  // load the controller's module
  beforeEach(module('angularWpClientApp'));

  var TermCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TermCtrl = $controller('TermCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
