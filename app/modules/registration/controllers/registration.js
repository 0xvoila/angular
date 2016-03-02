myapp.controller('registrationController', function($scope , $state , $http){

	console.debug('whats app');
	$state.go('registration.step1');

});


