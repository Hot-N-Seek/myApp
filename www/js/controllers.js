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

.controller('CreateCtrl', function($scope) {
    angular.element('#btnPost').on('click', function () {
 
    var params = {
      'name': angular.element('#name').val(),
      'longitude': localStorage.getItem('currentLong'),
      'latitude': localStorage.getItem('currentLat'),
      'user_id': localStorage.getItem('userId'),
    };
  
    angular.element.ajax({
      type: "POST",
      url: "http://getitred.com/ajax/post/item",
      data: params,
      error: function(jqXHR, strError){
        if (strError == 'timeout')
        {
          angular.element('#name').val('error');
        }
      },
      success: successCallback,
      dataType: "json",
      timeout: 3000
    });
 
  });

    var response;
 
  function successCallback(data) {

     response = data.posted;

      if(response) {
        angular.element.ajax({
          type: "POST",
          url: "http://getitred.com/ajax/post",
          'data': data,
          error: function(jqXHR, strError){
            if (strError == 'timeout')
            {
              angular.element('#name').val('error');
            }
          },
          success: successCallback,
          dataType: "json",
          timeout: 3000
        });

        window.location="#/tab/dash";
        alert('Post Successful');



      } else {

        $location.path('/');
      }
    }
  })

.controller('PlaceDetailCtrl', function($scope, $stateParams, Places) {
  $scope.place = Places.get($stateParams.placeId);
  console.log('scope in controllers' + $scope.place);
  var item_id = $scope.place.id;
  
  console.log('item_id in controllers' + item_id);

})

.controller('HideCtrl', function($scope, $location) {
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
      url: "http://getitred.com/ajax/post",
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
  var items;
  var id;
 
  function successCallback(data) {
 
      response = data.isAuthorized;
      id = data.user_id;
      usr = data.username;
      found = data.found_count;
      hidden = data.hidden_count;
      items = data.item;

      if(response) {
        angular.element.ajax({
          type: "POST",
          url: "http://getitred.com/ajax/post",
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

        localStorage.setItem('user_id', id);
        localStorage.setItem("usr",usr);
        localStorage.setItem("hidden",hidden);
        localStorage.setItem("found",found);

        var count = 0;
        $.each(items, function(index, value) {
          count++;
          var item = [];
          $.each(value, function(index2, value2) {
            item.push(value2);
          });
          console.log(item);
          localStorage.setItem('id' + count, item[0])
          localStorage.setItem('item' + count, item[1]);
          localStorage.setItem('latitude' + count, item[2]);
          localStorage.setItem('longitude' + count, item[3]);
          console.log(localStorage.getItem('id' + count));
          console.log(localStorage.getItem('item' + count));
        }); 
        console.log(count);
        var num = count.toString();
        console.log(num);
       localStorage.setItem("count",num);

        window.location="#/tab/dash";
        

        // call controller here
        // pass data as params


      } else {

        $location.path('/');
      }

  }

});

