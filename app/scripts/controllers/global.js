'use strict';

angular.module('workshop2App')
  // inject cookies serivece & UUID generator
  .controller('GlobalCtrl', function ($scope, $cookies, wsUuidGenerator) {
    // if it's empty set trackingId on cookie to new created UUID
    //if (!angular.isString($cookies.trackingId)) {
      //$cookies.trackingId = wsUuidGenerator.createUuid();
    //}
  });
