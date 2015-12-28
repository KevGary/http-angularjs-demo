var app = angular.module('httpDemo', ['ngRoute']);

app.controller('GlobalController', function ($scope, $q, httpFactory) {
  $scope.get = function(searchValue) {
    httpFactory.redditGet(searchValue)
      .then(function (response) {
        $scope.result = response;
      })
  }
});      

app.factory('httpFactory', function ($http) {
  return {
    redditGet: redditGet
  }
  function redditGet (searchValue) {
    return $http.get('http://www.reddit.com/search.json?q=' + String(searchValue))
  }
});
