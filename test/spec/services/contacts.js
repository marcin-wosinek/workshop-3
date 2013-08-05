'use strict';

describe('Service: contacts', function () {
  var ContactsResource = {
      query: jasmine.createSpy('query').andReturn('queryTest'),
      get: jasmine.createSpy('get').andReturn('getTest')
    },
    _resource = jasmine.createSpy('_resource').andReturn(ContactsResource);

  // load the service's module
  beforeEach(module('workshop2App'));

  // instantiate service
  var contacts;

  beforeEach(function () {
    module(function($provide) {
      $provide.value('$resource', _resource);
    });

    inject(function(_contacts_) {
      contacts = _contacts_;
    });
  });

  it('should be defined', function () {
    expect(!!contacts).toBe(true);
    expect(contacts.get).toBeFunction();
    expect(contacts.getAll).toBeFunction();
  });

  it('should implement getAll', function () {
    expect(ContactsResource.query).not.toHaveBeenCalled();
    var returned = contacts.getAll();
    expect(ContactsResource.query).toHaveBeenCalled();
    expect(returned).toEqual('queryTest');
  });

  it('should implement get', function () {
    expect(ContactsResource.get).not.toHaveBeenCalled();
    var returned = contacts.get(5);
    expect(ContactsResource.get).toHaveBeenCalledWith({id: 5});
    expect(returned).toEqual('getTest');

    // other number
    ContactsResource.get.reset();
    contacts.get(1);
    expect(ContactsResource.get).toHaveBeenCalledWith({id: 1});
  });
});
