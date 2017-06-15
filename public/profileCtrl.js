angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
	var promise = friendService.getFriends();
	promise.then(function(response){
		$scope.currentUser = response.data.currentUser;
		$scope.friends = response.data.friends;
	});
});
