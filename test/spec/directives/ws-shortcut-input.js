'use strict';

xdescribe('Directive: wsShortcutInput', function () {
  beforeEach(module('workshop2App'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<ws-shortcut-input></ws-shortcut-input>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the wsShortcutInput directive');
  }));
});
