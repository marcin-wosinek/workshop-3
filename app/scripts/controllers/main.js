'use strict';

angular.module('workshop2App')
  .controller('MainCtrl', function ($scope) {
    $scope.menuItems = [
      {
        label: 'Show contacts',
        path: '/showContacts'
      },
      {
        label: 'Show page',
        path: '/page'
      }
    ];
  });
