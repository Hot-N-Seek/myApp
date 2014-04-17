angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Places', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  


  var places = [];

  // list.forEach(function(element, index, array) {
  //   places.push({id:index, name:element[0]});
  // });

  var count = localStorage.getItem('count');
  console.log(count);
  count = parseInt(localStorage.getItem('count'));
  console.log(count);
  for(var i = 1; i <= count; i++) {
    var item = localStorage.getItem('item' + i);
    var index = localStorage.getItem('id' + i) - 1;
    places.push({id:index, name:item});
  }

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