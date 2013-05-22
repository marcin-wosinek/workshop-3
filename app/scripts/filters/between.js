'use strict';

angular.module('workshop2App')
  .filter('between', function () {
    return function (input) {
      return 'between filter: ' + input;
    };
  });
