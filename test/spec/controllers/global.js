'use strict';

describe('Controller: GlobalCtrl', function () {

  // load the controller's module
  beforeEach(module('workshop2App'));

  var GlobalCtrl,
    scope,
    cookies,
    wsUuidGenerator,
    init;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    // set up mocks
    cookies = {};
    wsUuidGenerator = {
      createUuid: jasmine.createSpy('createUuid').andReturn('341')
    };

    init = function () {
      GlobalCtrl = $controller('GlobalCtrl', {
        $scope: scope,
        $cookies: cookies,
        wsUuidGenerator: wsUuidGenerator
      });
    }
  }));

  it('should setup cookies', function () {
    init();
    expect(cookies.trackingId).toEqual('341');
    // verify if wsUuidGenerator.createUuid is fired
    expect(wsUuidGenerator.createUuid).toHaveBeenCalled();

    // TODO: check for some other value
  });
});
