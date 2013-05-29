'use strict';

angular.module('workshop2App')
  .directive('wsInterval', function () {
    /*
     * controll for selecting min and max values for interval
     */
    return {
      template: 'Min: <input type="range" max="{{model.max}}" min="{{min}}" ng-model="model.min"> {{model.min}}' +
          ' <br> Max: <input type="range" max="{{max}}" min="{{model.min}}" ng-model="model.max"> {{model.max}}',
        scope: {
        min: '@',
        max: '@',
        model: '=ngModel'
      },
      restrict: 'A',
      link: function (scope, element, attrs) {
        scope.model = {
          min: scope.min,
          max: scope.max
        };
      }
    };
  });
