'use strict';

angular.module('workshop2App')
  .controller('ContactEditCtrl', function ($scope, $routeParams, contacts) {
    $scope.contact = contacts.get($routeParams.id);
    $scope.id = $routeParams.id;
  });
