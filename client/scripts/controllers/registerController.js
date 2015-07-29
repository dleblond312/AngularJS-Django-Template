app.controller('registerCtrl', ['$scope', '$rootScope', '$location', 'authService', function($scope, $rootScope, $location, authService) {
	$scope.user = {};

    $scope.submit = function() {
	    if($scope.user) {
	        authService.register($scope.user).success(function(data) {
                $rootScope.$broadcast("UserUpdated", data);
	            $location.path('/');
	        }).error(function(error) {
	            console.log(error);
	        });
	    }
    }
}]);
