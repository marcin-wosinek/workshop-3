'use strict';

angular.module('workshop2App')
  .directive('wsShortcutInput', function () {
    return {
      template: '{{label}}: <input ng-model="number" />',
      restrict: 'A',
      link: function (scope, element, attrs)  {
        scope.label = attrs.wsLabel;
      }
    };
  });
