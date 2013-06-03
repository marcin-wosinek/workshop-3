'use strict';

angular.module('workshop2App')
  // TODO inject cookies serivece & UUID generator
  .controller('GlobalCtrl', function ($scope) {
    // TODO: if it's empty set trackingId on cookie to new created UUID
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
