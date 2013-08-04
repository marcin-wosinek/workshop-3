'use strict';

describe('Controller: GlobalCtrl', function () {

  // load the controller's module
  beforeEach(module('workshop2App'));

  // TODO: add mocks for $cookies & wsUuidGenerator
  var GlobalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    // TODO: set up mocks
    GlobalCtrl = $controller('GlobalCtrl', {
      $scope: scope
    });
  }));

  // TODO: create test with 'it'
});
