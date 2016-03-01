myapp.controller('registrationStep2Controller' , function($scope , $state , $http , registrationFactory){

	$scope.firstName = 'amit';
	x = registrationFactory.getUserInfo();
	console.log('userInfo is ' + x);
	$scope.firstName = x.firstName;



});

