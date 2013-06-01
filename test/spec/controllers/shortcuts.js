'use strict';

describe('Controller: ShortcutsCtrl', function () {

  // load the controller's module
  beforeEach(module('workshop2App'));

  var ShortcutsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShortcutsCtrl = $controller('ShortcutsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
