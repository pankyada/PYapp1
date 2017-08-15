var app = angular.module("loginApp",[]);

app.service("loginService", function ($http,$q){

    var deferred = $q.defer();
    $http.get('json/actor.json').then(function (data){
      deferred.resolve(data);
    });

    this.actors = function () {return deferred.promise;}
})

.controller("loginCtrl", function($scope, loginService){

  var promise = loginService.actors();
  promise.then(function(data){
    $scope.allActors = data;
    console.log($scope.allActors);
  })
})
