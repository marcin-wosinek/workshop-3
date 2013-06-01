'use strict';

angular.module('workshop2App')
  .directive('wsAcceptCookies', function () {
    /*
     * TODO: transclude original content in that directive, and add 'accept' button
     */
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the wsAcceptCookies directive');
      }
    };
  });
