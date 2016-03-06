myapp.controller('registrationStep2Controller' , function($scope , $state , $http ,registrationdetails ,registrationFactory){

	x = registrationFactory.getUserInfo();
	console.log('Google is here---');
	$scope.firstName = x.firstName;

	// Now store step2 data of registration

	$scope.asubmit = function(){

		email = registrationdetails.email;

		console.debug('getting email is ' + email);
		password = registrationdetails.password;
		
		data = {};
		data.email = email;
		data.password = password;
		registrationFactory.step2Store(data);

		console.debug("Data stored for user ");

		$state.go('registration.completed');

	}



});

