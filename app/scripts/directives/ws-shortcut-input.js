'use strict';

angular.module('workshop2App')
  .directive('wsShortcutInput', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the wsShortcutInput directive');
      }
    };
  });
