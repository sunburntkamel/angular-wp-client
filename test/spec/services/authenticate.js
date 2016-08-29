'use strict';

describe('Service: authenticate', function () {

  // load the service's module
  beforeEach(module('angularWpClientApp'));

  // instantiate service
  var authenticate;
  beforeEach(inject(function (_authenticate_) {
    authenticate = _authenticate_;
  }));

  it('should do something', function () {
    expect(!!authenticate).toBe(true);
  });

});
