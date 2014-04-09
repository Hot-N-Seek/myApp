angular.module('starter.controllers', [])

.controller('LoginController', ['$scope', '$stateParams', 'Login', function($scope, $stateParams, Login) {
    // Instantiate an object to store your scope data in (Best Practices)
    $scope.submit = function(){
      Login.login('a@a.a','123');
   };

    window.loginData = $scope;
}])

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
