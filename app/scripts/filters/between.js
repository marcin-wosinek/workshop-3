'use strict';

angular.module('workshop2App')
  .filter('between', function () {
    /*
     * TODO: implement filter which take 4 parameters
     * input - array of elements
     * key - property of each element, that is expected to fit between:
     * min - value
     * max - value
     *
     * example of usage app/views/showContacts.html
     */
    return function (input) {
      return 'between filter: ' + input;
    };
  });
