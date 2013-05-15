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
      .when('/contact/:id', {
        redirectTo: '/contact/:id/view'
      })
      .when('/contact/:id/view', {
        templateUrl: 'views/contactView.html',
        controller: 'ContactViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
