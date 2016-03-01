myapp.controller('inboxController', function($scope , $http){

	$http.get('../repository/inbox/emails.json').then(

		function(response){

			console.debug("rahul");
			$scope.emails = response.data;
			console.debug(response);

		}, 

		function(errResponse){

			console.debug("Unable to fetch inbox emails");

			
		});

});