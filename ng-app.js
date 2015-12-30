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

<!-- [Here](http://postgresguide.com/utilities/psql.html) is a nice list of commonly used psql commands.  Below we will describe how to set up a username/password, create and delete a database, create, update, and delete tables within this database, as well as see our tables and relationships within the given database.  This will set us up nicely for using postgres in our development environments and to begin incorporating tools such as [SequelizeJS](http://docs.sequelizejs.com/en/latest/), [Knex.js](http://knexjs.org/), and [Bookshelf.js](http://bookshelfjs.org/). -->
<!-- 
It is convention,but not required to type all SQL commands as uppercase.  I will be doing that for the duration of this tutorial. Let's reenter postgres' interactive terminal and list all current users.  You should have one user by default: -->