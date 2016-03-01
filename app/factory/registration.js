myapp.factory('registrationFactory' , function($http){

	var registration = {};
	var _firstName = '';
	var _lastName = '';
	var _voucherCode = '';
	var _country = '';
	var _email = '';
	var _password = '';

	registration.step1Store = function(regData){

		_firstName = regData.firstName;
		_lastName = regData.secondName;
		_voucherCode = regData.voucherCode;
		_country = regData.country;

		// Now make call to backend and store the data 

		return 0;
	},

	registration.step2Store = function(regData){

		_email = regData.email;
		_password = regData.password;
		
		// Now make call to backend and store the data 

		return 0;
	},


	registration.getUserInfo = function(){

		userInfo = {};

		userInfo.firstName = _firstName;
		userInfo.lastName = _lastName;
		userInfo.voucherCode = _voucherCode;
		userInfo.country = _country;
		userInfo.email = _email;
		userInfo.password = _password;

		return userInfo;

	}

	return registration;

});