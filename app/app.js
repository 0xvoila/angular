myapp = angular.module('emailApp' , ['ui.router']).config(function($stateProvider , $urlRouterProvider){

	$urlRouterProvider.otherwise('/registration');

	$stateProvider.state('registration',{

			url:'/registration',
			templateUrl : 'partials/registration/registration.html',
			controller : 'registrationController'

	});

	$stateProvider.state('registration.step1' , {

		 url:'/step1',
		 templateUrl:'partials/registration/step1.html',
		 controller : 'registrationStep1Controller'

	});

	$stateProvider.state('registration.step2' , {

		 url:'/step2',
		 templateUrl:'partials/registration/step2.html',
		 controller : 'registrationStep2Controller'

	});

	$stateProvider.state('registration.step3' , {

		 url:'/step3',
		 templateUrl:'partials/registration/step3.html',
		 controller : 'registrationStep3Controller'

	});

	$stateProvider.state('registration.completed' , {

		 url:'/completed',
		 templateUrl:'partials/registration/completed.html',
		 controller : 'registrationCompletedController'

	});

});

myapp.controller('rootController',function($scope){



});