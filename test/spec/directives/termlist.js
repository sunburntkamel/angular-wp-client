'use strict';

describe('Directive: termList', function () {

  // load the directive's module
  beforeEach(module('angularWpClientApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<term-list></term-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the termList directive');
  }));
});
