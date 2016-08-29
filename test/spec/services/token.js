'use strict';

describe('Service: token', function () {

  // load the service's module
  beforeEach(module('angularWpClientApp'));

  // instantiate service
  var token;
  beforeEach(inject(function (_token_) {
    token = _token_;
  }));

  it('should do something', function () {
    expect(!!token).toBe(true);
  });

});
