'use strict';

xdescribe('Directive: wsInterval', function () {
  beforeEach(module('workshop2App'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<ws-interval></ws-interval>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the wsInterval directive');
  }));
});
