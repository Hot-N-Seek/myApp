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
});
