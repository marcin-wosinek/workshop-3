'use strict';

angular.module('workshop2App', ['ngCookies', 'ngResource'])
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
      .when('/contact/:id/edit', {
        templateUrl: 'views/contactEdit.html',
        controller: 'ContactEditCtrl'
      })
      .when('/page', {
        templateUrl: 'views/page.html',
        controller: 'PageCtrl'
      })
      .when('/shortcuts', {
        templateUrl: 'views/shortcuts.html',
        controller: 'ShortcutsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
