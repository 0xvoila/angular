registrationModule = angular.module('emailApp.registration' , ['ui.router' ,'emailApp.registration.registrationdetails']).config(function($stateProvider , $urlRouterProvider){

	console.log('From registration module');

	$urlRouterProvider.otherwise('/registration');

	$stateProvider.state('registration', {

		url:'/registration',
		controller:'registrationController',
		controllerAs: 'reg',
		templateUrl:'partials/registration.html',


	});

	$stateProvider.state('registration.step1' , {

		url: '/step1',
		controller : 'registrationStep1Controller',
		resolve : {

			obj : function(){

				return {value:"amit"};
			}
		},

		controllerAs: 'regStep1',
		templateUrl : 'partials/step1.html',

	});

	$stateProvider.state('registration.step2' , {

		url: '/step2',
		controller : 'registrationStep2Controller',
		controllerAs: 'regStep2',
		templateUrl : 'partials/step2.html'

	});

	$stateProvider.state('registration.completed' , {

		url:'/completed',
		controller : 'registrationCompleted',
		controllerAs: 'regCompleted',
		templateUrl : 'partials/completed.html'


	});

});