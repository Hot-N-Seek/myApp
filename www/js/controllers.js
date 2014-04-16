angular.module('starter.controllers', [])



.controller('LoginCtrl', function($scope) {

})

.controller('DashCtrl', function($scope) {
  var usr = localStorage.getItem("usr");
  var hidden = localStorage.getItem("hidden");
  var found = localStorage.getItem("found");

  document.getElementById('username').innerHTML = usr;
  document.getElementById('found').innerHTML = found;
  document.getElementById('hidden').innerHTML = hidden;
})

.controller('PlacesCtrl', function($scope, Places) {
  $scope.places = Places.all();
})

.controller('PlaceDetailCtrl', function($scope, $stateParams, Places) {
  $scope.place = Places.get($stateParams.placeId);
})

.controller('HideCtrl', function($scope) {
  console.log('HideCtrl');
  var tabs = document.querySelectorAll('div.tabs')[0];
  tabs = angular.element(tabs);
  tabs.css('display', 'none');
  
  $scope.$on('$destroy', function() {
    console.log('HideCtrl destroy');
    tabs.css('display', '');

  });

    angular.element('#btnPost').on('click', function () {
 
    var params = {
      'email': angular.element('#email').val(),
      'password': angular.element('#password').val(),
    };
 
   // $.post("http://capstone.dev/ajax/post", params, successCallback);
 
    angular.element.ajax({
      type: "POST",
      url: "http://capstone.dev/ajax/post",
      data: params,
      error: function(jqXHR, strError){
        if (strError == 'timeout')
        {
          angular.element('#email').val('error');
        }
      },
      success: successCallback,
      dataType: "json",
      timeout: 3000
    });

  //   $http.post('http://capstone.dev/ajax/post', params).
  //   success(function(data, status, headers, config) {
  //     angular.element('#email').val('success');
  //   }).
  //   error(function(data, status, headers, config) {
  //     angular.element('#email').val('fail');
  //   });
 
  });

  var response;
  var usr;
  var hidden;
  var found;
 
  function successCallback(data) {
 
      response = data.isAuthorized;
      usr = data.username;
      found = data.found_count;
      hidden = data.hidden_count;

      if(response) {
        angular.element.ajax({
          type: "POST",
          url: "http://capstone.dev/ajax/post",
          'data': data,
          error: function(jqXHR, strError){
            if (strError == 'timeout')
            {
              angular.element('#email').val('error');
            }
          },
          success: successCallback,
          dataType: "json",
          timeout: 3000
        });

        localStorage.setItem("usr",usr);
        localStorage.setItem("hidden",hidden);
        localStorage.setItem("found",found);

        window.location="#/tab/dash";
        

        // call controller here
        // pass data as params


      } else {

        $location.path('/');
      }

  }

});

