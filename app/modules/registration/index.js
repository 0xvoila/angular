registrationModule = angular.module('emailApp.registration' , ['ui.router']).config(function($stateProvider , $urlRouterProvider){

	$urlRouterProvider.otherwise('/registration');

	$stateProvider.state('registration', {

		url:'/registration',
		controller:'registrationController',
		templateUrl:'partials/registration.html'

	});

	$stateProvider.state('registration.step1' , {

		url: '/step1',
		controller : 'registrationStep1Controller',
		templateUrl : 'partials/step1.html',

	});

	$stateProvider.state('registration.step2' , {

		url: '/step2',
		controller : 'registrationStep2Controller',
		templateUrl : 'partials/step2.html'

	});

	$stateProvider.state('registration.completed' , {

		url:'/completed',
		controller : 'registrationCompleted',
		templateUrl : 'partials/completed.html'


	});

});