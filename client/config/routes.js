var myApp = angular.module('myApp',['ngRoute','ngMessages'])
myApp.config(function($routeProvider){
  $routeProvider
    .when('/dashboard',{
      templateUrl:'partials/dashboard.html'
    })
    .when('/index',{
      templateUrl:'partials/login.html'
    })
    .when('/user/:id',{
      templateUrl:'partials/user.html'
    })
    .otherwise({
      redirectTo:'/index'
    })
})
