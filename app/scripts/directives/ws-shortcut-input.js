'use strict';

angular.module('workshop2App')
  .directive('wsShortcutInput', function () {
    return {
      template: '{{label}}: <input ng-model="number" />',
      restrict: 'A',
      scope: {
        label: '@wsLabel'
      }
    };
  });
