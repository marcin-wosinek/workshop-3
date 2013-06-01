'use strict';

angular.module('workshop2App')
  .directive('wsAcceptCookies', function ($cookies) {
    /*
     * Transclude original content in that directive, and add 'accept' button
     */
    return {
      template: '<div ng-transclude></div>' +
                '<button ng-click="accept()">Akceptuje</button>',
      restrict: 'A',
      transclude: true,
      link: function postLink(scope, element, attrs)  {
        // accept button logic
        scope.accept = function () {
          $cookies.accepted = 'true';
          element.css('display', 'none');
        };

        // hide element if cookies are already accepted
        if ($cookies.accepted) {
          element.css('display', 'none');
        }
      }
    };
  });
