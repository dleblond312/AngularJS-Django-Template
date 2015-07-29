app.controller('authCtrl', ['$scope', '$rootScope', 'authService', function($scope, $rootScope, authService) {
    $scope.loaded = false;
    $scope.auth = {};

    $scope.signout = function() {
        $scope.loaded = false;
        authService.signout().success(function() {
            $scope.loaded = true;
            authService.setUser(null);
        }).error(function(error) {
            $scope.loaded = true;
            console.error(error);
        });
    };

    $scope.signin = function() {
        $scope.loaded = false;
        $scope.auth.unauthorized = null;

        authService.signin($scope.auth).success(function(user) {
            $scope.loaded = true;
            authService.setUser(user);
        }).error(function(error) {
            $scope.auth.unauthorized = true;
            $scope.loaded = true;
            console.error(error);
        });
    };

    authService.getUserData().success(function(user) {
        authService.setUser(user);
        $scope.loaded = true;
        console.log(user);
    }).error(function(error) {
        $scope.loaded = true;
       console.log(error);
    });

    $scope.$on('UserUpdated', function(event, model) {
       $scope.user = model;
    });
}]);
