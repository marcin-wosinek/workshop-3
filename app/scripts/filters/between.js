'use strict';

angular.module('workshop2App')
  .filter('between', function () {
    /*
     * filter which take 4 parameters
     *
     * input - array of elements
     * key - property of each element, that is expected to fit between:
     * min - value
     * max - value
     *
     * example of usage app/views/showContacts.html
     */
    return function (input, key, min, max) {
      if (angular.isArray(input)) {
        var toReturn = [];

        angular.forEach(input, function (element) {
          if (min <= element[key] && element[key] <= max) {
            toReturn.push(element);
          }
        });

        return toReturn;
      }

      // is not array - just return unmodified and forget
      return input;
    };
  });
