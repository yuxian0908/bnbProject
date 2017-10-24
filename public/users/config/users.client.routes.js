// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'users' module routes
angular.module('users').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/_admin', {
			templateUrl: 'users/views/users.client.view.html'
		}).
		otherwise({
			redirectTo: '/_admin'
		});
	}
]); 