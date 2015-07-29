/* App module */


var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.
        when('/', {
          templateUrl: '/client/partials/home.html',
          controller: 'homeCtrl'
        }).
        when('/register', {
            templateUrl: '/client/partials/register.html',
            controller: 'registerCtrl'
        }).otherwise({
            redirectTo: '/'
        });
}]);

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}]);