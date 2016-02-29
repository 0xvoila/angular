var myapp = angular.module('emailApp',["ui.router"]).config(function($stateProvider , $urlRouterProvider){
   
    $urlRouterProvider.otherwise('/inbox');
	$stateProvider.state('inbox', 

		    {
		    	url: '/inbox',
		    	templateUrl: "../templates/inbox.html",
		    	controller: 'inboxController'
		    });

	$stateProvider.state('sent' ,

		    {
		    	url: '/sent',
		    	templateUrl:'../templates/sent.html',
		    	controller:'sentController'

		    });

	$stateProvider.state('deleted',

		    {

		    	url:'/deleted',
		    	templateUrl:'../templates/deleted.html',
		    	controller:'deletedController'
		    });


});

myapp.controller('rootController', function($scope){



});

