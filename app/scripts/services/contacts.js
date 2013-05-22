'use strict';

angular.module('workshop2App')
  .factory('contacts', function () {
    /* http://www.json-generator.com/ recipe
[
    '{{repeat(5)}}',
    {
        id: '{{index}}',
        guid: '{{guid}}',
        age: '{{numeric(20,40)}}',
        firstName: '{{firstName}}',
        lastName: '{{lastName}}',
        gender: function(idx) {
            return this.bool() ? 'male' : 'female';
        },
        company: '{{company}}',
        phone: '{{phone}}',
        email: '{{email}}',
        tags: [
            '{{repeat(7)}}',
            '{{lorem(1)}}'
        ]
    }
]
       */
    var exampleContacts = [
      {
        "id": 1,
        "guid": "a156e9c1-6b69-408b-b4e1-99c67be2c86b",
        "age": 38,
        "firstName": "Riley",
        "lastName": "Day",
        "gender": "female",
        "company": "Xeicon",
        "phone": "873-503-2659",
        "email": "riley@xeicon.com"
      },
      {
        "id": 2,
        "guid": "ed237a83-f9b2-4c8e-836f-510fee7ce4c3",
        "age": 20,
        "firstName": "Camila",
        "lastName": "Molligan",
        "gender": "male",
        "company": "Skydata",
        "phone": "874-423-3848",
        "email": "camila@skydata.com"
      },
      {
        "id": 3,
        "guid": "d47a1450-888d-431c-baae-8e3cb23dc008",
        "age": 25,
        "firstName": "Hannah",
        "lastName": "Wainwright",
        "gender": "female",
        "company": "Robotomic",
        "phone": "846-414-3956",
        "email": "hannah@robotomic.com"
      },
      {
        "id": 4,
        "guid": "0e431a1a-d959-413c-986e-b58d749bdd7d",
        "age": 26,
        "firstName": "Aaliyah",
        "lastName": "Gate",
        "gender": "male",
        "company": "Hypervaco",
        "phone": "845-449-4000",
        "email": "aaliyah@hypervaco.com"
      },
      {
        "id": 5,
        "guid": "d329f9bb-3365-4be3-84c3-26c745b4aee8",
        "age": 29,
        "firstName": "Madeline",
        "lastName": "Creighton",
        "gender": "female",
        "company": "Quintegrity",
        "phone": "843-415-2385",
        "email": "madeline@quintegrity.com"
      }
    ];

    // Public API here
    return {
      getAll: function () {
        return exampleContacts;
      },
      get: function (id) {
        var found = _.find(exampleContacts, function (item) {
          return item.id == id;
        });
        return found;
      }
    };
  });
