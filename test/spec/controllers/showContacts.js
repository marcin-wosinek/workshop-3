'use strict';

describe('Controller: ShowContactsCtrl', function () {

  // load the controller's module
  beforeEach(module('workshop2App'));

  var ShowContactsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShowContactsCtrl = $controller('ShowContactsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
