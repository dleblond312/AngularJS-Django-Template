app.controller('homeCtrl', ['$scope', '$rootScope', '$timeout', function($scope, $rootScope, $timeout){

    // We get a notice when the user has authenticated
    $scope.$on('UserUpdated', function(event, user) {

    });

}]);