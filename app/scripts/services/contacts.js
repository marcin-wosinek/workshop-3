'use strict';

angular.module('workshop2App')
  .factory('contacts', function ($resource) {
    var ContactsResource = $resource('contacts/:id');

    // Public API here
    return {
      getAll: function () {
        return ContactsResource.query();
      },
      get: function (id) {
        return ContactsResource.get({id: id});
      }
    };
  });
