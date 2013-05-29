'use strict';

angular.module('workshop2App')
  .directive('wsInterval', function () {
    /*
     * TODO: controll for selecting min and max values for interval
     */
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the wsInterval directive');
      }
    };
  });
