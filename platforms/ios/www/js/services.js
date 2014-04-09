angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Places', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var places = [
    { id: 0, name: 'Enchanted Rock' },
    { id: 1, name: 'Olmos Park' },
    { id: 2, name: 'The Quarry' },
    { id: 3, name: 'Travis Park' }
  ];

  return {
    all: function() {
      return places;
    },
    get: function(placeId) {
      // Simple index lookup
      return places[placeId];
    }
  }
})

.factory('Login', function($rootScope, $location, $window, $http) {
  var isLoggedIn = false;

  isLoggedIn = $window.sessionStorage.token !== null;

  $rootScope.$on('user.login', function() {
    $location.path('/index');
  });

  $rootScope.$on('user.logout', function() {
    isLoggedIn = false;

    // redir to login page
    $location.path('/');
  });

  return {
    isLoggedIn: function() { return isLoggedIn; },
    login: function(usr, pass) {
      // Do login here
      //$http.defaults.useXDomain = true;
      var postParams = {email: usr, password: pass};
      $http
      .post('http://bb3.nifnic.nl/api/login', postParams)
      .success(function (data, status, headers, config) {
        $window.sessionStorage.token = data.token;
        isLoggedIn = true;
        $rootScope.$broadcast('user.login');
      })
      .error(function (data, status, headers, config) {
        //error handler
      });
    },
    logout: function() {
      $rootScope.$broadcast('user.logout');
    }
  }
});
