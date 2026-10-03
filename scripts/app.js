'use strict';

// declare a module
angular.module('myApp', []);

// configure the module.
// in this example we will create a greeting filter
angular.module('myApp')

  .controller('ServicesController', ['$scope', 'services', function($scope, services) {
    $scope.services= services.getServices();
    console.log($scope.services)
  }])
