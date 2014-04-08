angular.module('starter.controllers', [])

.controller('ProfileCtrl', function($scope) {
})

.controller('PlacesCtrl', function($scope, Places) {
  $scope.places = Places.all();
})

.controller('PlaceDetailCtrl', function($scope, $stateParams, Places) {
  $scope.place = Places.get($stateParams.placeId);
})

.controller('LogOutCtrl', function($scope) {
});
