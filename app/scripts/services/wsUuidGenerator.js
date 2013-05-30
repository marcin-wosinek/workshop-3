'use strict';

angular.module('workshop2App')
  .factory('wsUuidGenerator', function () {
    // Public API here
    return {
      createUuid: function () {
        // based on http://stackoverflow.com/a/2117523
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random()*16|0,v=c=='x'?r:r&0x3|0x8;return v.toString(16);});
      }
    };
  });
