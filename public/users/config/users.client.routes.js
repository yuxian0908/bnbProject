// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'visitors' module routes
angular.module('visitors').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/#!/_admin', {
			templateUrl: 'users/views/users.client.view.html'
		}).
		otherwise({
			redirectTo: '/#!/_admin'
		});
	}
]); 