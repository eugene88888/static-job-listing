/* global angular */
const myApp = angular.module('mainApp', ['ngResource']);
myApp.factory('Job', function($resource) {
  return $resource('data.json');
});
myApp.controller('MainController', function($scope, Job) {
      $scope.jobs = Job.query();
    });
