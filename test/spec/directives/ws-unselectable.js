'use strict';

xdescribe('Directive: wsUnselectable', function () {
  beforeEach(module('workshop2App'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<ws-unselectable></ws-unselectable>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the wsUnselectable directive');
  }));
});
