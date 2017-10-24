// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'visitors' module routes
angular.module('visitors').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'visitors/views/visitors.client.view.html'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]); 
