'use strict';

angular.module('workshop2App')
  .controller('ContactViewCtrl', function ($scope, $routeParams, contacts) {
    $scope.contact = contacts.get($routeParams.id);
  });
