app.service('authService', ['$http', '$rootScope', function($http, $rootScope) {
    var user = {};

    this.getUserData = function() {
        return $http({
            url: '/api/user/data/',
            method: 'GET'
        });
    }

    this.signout = function() {
        return $http({
            url: '/api/user/signout/',
            method: 'GET'
        });
    }
    this.signin = function(auth) {
        return $http({
            url: '/api/user/signin/',
            method: 'POST',
            data: auth
        });
    }

    this.register = function(account) {
        return $http({
            url: '/api/user/register/',
            method: 'POST',
            data: account
        })
    }

    this.getUser = function() {
        return user;
    }

    this.setUser = function(u) {
        user = u;
        $rootScope.$broadcast('UserUpdated', user);
    }

}]);