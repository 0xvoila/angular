myapp.controller('deletedController', function($scope , $http){

		$http.get('../repository/deleted/emails.json').then(function($response){

			$scope.emails = $response.data;

		},

		function($errResponse){

			console.debug('Unable to fetch emails');

		});

});