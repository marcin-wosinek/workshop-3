'use strict';

describe('Controller: GlobalCtrl', function () {

  // load the controller's module
  beforeEach(module('workshop2App'));

  var GlobalCtrl,
    scope,
    cookies,
    wsUuidGenerator;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    // set up mocks
    cookies = {};
    wsUuidGenerator = {
      createUuid: jasmine.createSpy('createUuid').andReturn('341')
    };

    GlobalCtrl = $controller('GlobalCtrl', {
      $scope: scope,
      $cookies: cookies,
      wsUuidGenerator: wsUuidGenerator
    });
  }));

  it('should setup cookies', function () {
    expect(cookies.trackingId).toEqual('341');
  });
});
