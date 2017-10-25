// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'users' module routes
angular.module('users').config(['$routeProvider','$locationProvider',
	function($routeProvider,$locationProvider) {
		$routeProvider.
		when('/_admin', {
			templateUrl: 'users/views/users.client.view.html'
		}).
		otherwise({
			redirectTo: '/_admin'
		});

		$locationProvider.html5Mode(true);
	}
	
]); 