angular.module('starter.controllers', [])

.controller('LandCtrl', function($scope) {
})

.controller('DashCtrl', function($scope) {
})

.controller('PlacesCtrl', function($scope, Places) {
  $scope.places = Places.all();
})

.controller('PlaceDetailCtrl', function($scope, $stateParams, Places) {
  $scope.friend = Places.get($stateParams.placeId);
})

.controller('LogCtrl', function($scope) {
});
