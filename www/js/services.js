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
  for(var i = 0; i < count; i++) {
    var j = i + 1;
    var item = localStorage.getItem('item' + j);
    var index = localStorage.getItem('id' + j);
    places.push({id:i, name:item, item_id:index});
  }

  return {
    all: function() {
      return places;
    },
    get: function(placeId) {
      // Simple index lookup
      localStorage.setItem('currentId', placeId);
      return places[placeId];
    }
  }
});