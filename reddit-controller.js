var app = angular.module('redditMod');

app.controller('redditController', function($scope, $http){
    console.log("reddit controller has loaded have a great weeekend you earned it")
    $scope.feeds = [];

    $scope.clicker = function(a) {


    $http ({
      method: 'GET',
      url: 'https://www.reddit.com/r/' + a + '.json',
      params: {
        limit: '5'
      }
    })
    .then(function success(response){
      $scope.feeds = response.data.data.children;
    },
      function(error){
        console.log(error);
    })
  }
  });
    app.directive('redditFeed', function() {
      return {
        restrict: 'E',
        replace: false,
        templateUrl: 'redditFeed.html'
      }
    })

//
// });
