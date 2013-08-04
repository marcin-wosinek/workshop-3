'use strict';

xdescribe('Controller: ContactViewCtrl', function () {

  // load the controller's module
  beforeEach(module('workshop2App'));

  var ContactViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactViewCtrl = $controller('ContactViewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
