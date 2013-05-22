'use strict';

describe('Filter: between', function () {

  // load the filter's module
  beforeEach(module('workshop2App'));

  // initialize a new instance of the filter before each test
  var between;
  beforeEach(inject(function ($filter) {
    between = $filter('between');
  }));

  it('should return the input prefixed with "between filter:"', function () {
    var text = 'angularjs';
    expect(between(text)).toBe('between filter: ' + text);
  });

});
