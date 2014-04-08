angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Places', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var places = [
    { id: 0, name: 'Enchanted Rock' },
    { id: 1, name: 'River Center' },
    { id: 2, name: 'McCallister Park' },
    { id: 3, name: 'Olmos Park' }
  ];

  return {
    all: function() {
      return places;
    },
    get: function(PlaceId) {
      // Simple index lookup
      return places[placeId];
    }
  }
});
