'use strict';

angular.module('workshop2App')
  .controller('ShowContactsCtrl', function ($scope, contacts) {
    $scope.contacts = contacts.getAll();
  });
