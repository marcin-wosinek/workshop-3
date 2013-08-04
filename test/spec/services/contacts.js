'use strict';

describe('Service: contacts', function () {
  var ContactsResource = {
      query: jasmine.createSpy('query'),
      get: jasmine.createSpy('get')
    },
    _resource = jasmine.createSpy('_resource').andReturn(ContactsResource);

  // load the service's module
  beforeEach(module('workshop2App'));

  // instantiate service
  var contacts;
  beforeEach(inject(function (_contacts_) {
    contacts = _contacts_;
  }));

  it('should be defined', function () {
    expect(!!contacts).toBe(true);
    expect(contacts.get).toBeFunction();
    expect(contacts.getAll).toBeFunction();
  });

});
