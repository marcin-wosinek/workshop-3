'use strict';

angular.module('workshop2App', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/showContacts', {
        templateUrl: 'views/showContacts.html',
        controller: 'ShowContactsCtrl'
      })
      .when('/contactView', {
        templateUrl: 'views/contactView.html',
        controller: 'ContactViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
