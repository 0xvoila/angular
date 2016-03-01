myapp.controller('registrationStep1Controller' , function($scope , $state , $http , registrationFactory){

	$scope.submit = function(){

		console.debug("here I am ");
		firstName = $scope.firstName;
		lastName = $scope.lastName;
		voucherCode = $scope.voucherCode;
		country = $scope.country;

		data = {};
		data.firstName = firstName;
		data.lastName = lastName;
		data.voucherCode = voucherCode;
		data.country = country;

		registrationFactory.step1Store(data);
		

		$state.go('registration.step2');

		}	

});