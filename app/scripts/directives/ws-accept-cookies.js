'use strict';

angular.module('workshop2App')
  .directive('wsAcceptCookies', function () {
    /*
     * Transclude original content in that directive, and add 'accept' button
     */
    return {
      template: '<div ng-transclude></div>' +
                '<button>Akceptuje</button>',
      restrict: 'A',
      transclude: true,
      link: function postLink(scope, element, attrs) {
      }
    };
  });
