'use strict';

xdescribe('Directive: wsAcceptCookies', function () {
  beforeEach(module('workshop2App'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<ws-accept-cookies></ws-accept-cookies>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the wsAcceptCookies directive');
  }));
});
