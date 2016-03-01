var myapp = angular.module('emailApp',["ui.router"]).config(function($stateProvider , $urlRouterProvider){
   
    $urlRouterProvider.otherwise('/mail');

    $stateProvider.state('mail',
	
	{	url : '/mail',
		templateUrl:'../templates/mail.html',
		controller:'mailController'
    });


	$stateProvider.state('mail.inbox', 

		    {
		    	url: '/inbox',
		    	templateUrl: "../templates/inbox.html",
		    	controller: 'inboxController'
		    });

	$stateProvider.state('mail.sent' ,

		    {
		    	url: '/sent',
		    	templateUrl:'../templates/sent.html',
		    	controller:'sentController'

		    });

	$stateProvider.state('mail.deleted',

		    {

		    	url:'/deleted',
		    	templateUrl:'../templates/deleted.html',
		    	controller:'deletedController'
		    });


});

myapp.controller('rootController', function($scope){



});

