'use strict';

describe('Service: authorize', function () {

  // load the service's module
  beforeEach(module('angularWpClientApp'));

  // instantiate service
  var authorize;
  beforeEach(inject(function (_authorize_) {
    authorize = _authorize_;
  }));

  it('should do something', function () {
    expect(!!authorize).toBe(true);
  });

});
