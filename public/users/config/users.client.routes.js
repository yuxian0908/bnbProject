// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'users' module routes
angular.module('users').config(['$routeProvider','$locationProvider',
	function($routeProvider,$locationProvider) {
		$routeProvider.
		when('/_admin', {
			templateUrl: 'users/views/users.client.view.html'
		}).
		when('/signin',{
			templateUrl: 'users/views/usersSignin.client.view.html'
		}).
		when('/signout',{
			templateUrl: 'users/views/usersSignout.client.view.html'
		}).
		when('/_admin/reser',{
			templateUrl: 'visitors/views/reser/list-reser.client.view.html'
		}).
		otherwise({
			redirectTo: '/_admin'
		});

		$locationProvider.html5Mode(true);
	}
	
]); 