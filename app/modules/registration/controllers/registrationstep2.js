myapp.controller('registrationStep2Controller' , function($scope , $state , $http , registrationFactory){

	x = registrationFactory.getUserInfo();
	console.log('Google is here---');
	$scope.firstName = x.firstName;

	// Now store step2 data of registration

	$scope.mesubmit = function(){

		data = {};
		data.email = $scope.email;
		data.password = $scope.password;
		registrationFactory.step2Store(data);

		console.debug("Data stored for user ");

		$state.go('registration.completed');

	}



});

