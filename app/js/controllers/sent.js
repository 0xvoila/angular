myapp.controller('sentController', function($scope , $http){

		$http.get('../repository/sent/emails.json').then(function($response){

			$scope.emails = $response.data;

		},

		function($errResponse){

			console.debug('Unable to fetch emails');

		});

});