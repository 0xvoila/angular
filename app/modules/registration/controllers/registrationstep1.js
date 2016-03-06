myapp.controller('registrationStep1Controller' , function($scope,obj,$state,$http,registrationdetails,registrationFactory){

	$scope.registrationdetails = registrationdetails;

	console.debug(obj);
	$scope.submit = function(){
		
		firstName = registrationdetails.firstName;
		lastName = registrationdetails.lastName;
		voucherCode = registrationdetails.voucherCode;
		country = registrationdetails.country;

        console.debug(registrationdetails);
		data = {};
		data.firstName = firstName;
		data.lastName = lastName;
		data.voucherCode = voucherCode;
		data.country = country;

		registrationFactory.step1Store(data);
		

		$state.go('registration.step2');

		}	

});