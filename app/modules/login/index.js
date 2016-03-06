loginModule = angular.module('emailApp.login', ['ui.router']).config(function($stateProvider , $urlRouterProvider){

	console.log('From login module');
	$urlRouterProvider.otherwise('/404')
	$stateProvider.state('login',{

		url:'/login',
		controller:'loginController',
		templateUrl:'partials/login.html'
	})

});