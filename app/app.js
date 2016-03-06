myapp = angular.module('emailApp' , ['ui.router' , 'emailApp.login' , 'emailApp.registration' , 'emailApp.registration.registrationdetails' ]).config(function($stateProvider , $urlRouterProvider){

	console.log('From main module');
});

myapp.controller('rootController',function($scope){



});