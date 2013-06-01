'use strict';

angular.module('workshop2App')
  .directive('wsUnselectable', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.bind('mousedown', function(e) {
          e.preventDefault();
        });
        element.bind('selectstart', function(e) {
          e.preventDefault();
        });
      }
    };
  });
