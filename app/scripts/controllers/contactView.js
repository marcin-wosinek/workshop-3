'use strict';

angular.module('workshop2App')
  .controller('ContactViewCtrl', function ($scope, $routeParams) {
    $scope.contact = $routeParams.id;
  });
