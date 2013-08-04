'use strict';

xdescribe('Service: wsUuidGenerator', function () {

  // load the service's module
  beforeEach(module('workshop2App'));

  // instantiate service
  var wsUuidGenerator;
  beforeEach(inject(function (_wsUuidGenerator_) {
    wsUuidGenerator = _wsUuidGenerator_;
  }));

  it('should do something', function () {
    expect(!!wsUuidGenerator).toBe(true);
  });

});
