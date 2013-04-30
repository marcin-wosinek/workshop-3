// Create a new module
var workshop = angular.module("workshop", []);

// Create routes
workshop.config(function($routeProvider) {
  $routeProvider
    .when("/list", {
      templateUrl: "views/list.html",
      controller: "ListCtrl"
    })
    .otherwise({
      redirectTo: '/list'
    });
});

workshop.controller("ListCtrl", function($scope) {
  $scope.hello = "Hello World";
});
