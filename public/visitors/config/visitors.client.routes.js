// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'visitors' module routes
angular.module('visitors').config(['$routeProvider','$locationProvider',
	function($routeProvider,$locationProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'visitors/views/visitors.client.view.html'
		}).
		when('/intro',{
			templateUrl: 'visitors/views/visitorsIntro.client.view.html'
		}).
		when('/room',{
			templateUrl: 'visitors/views/visitorsRoom.client.view.html'
		}).
		when('/reser',{
			templateUrl: 'visitors/views/visitorsReser.client.view.html'
		}).
		when('/nearby',{
			templateUrl: 'visitors/views/visitorsNearby.client.view.html'
		}).
		when('/loc',{
			templateUrl: 'visitors/views/visitorsloc.client.view.html'
		}).
		when('/infor',{
			templateUrl: 'visitors/views/visitorsInfor.client.view.html'
		}).
		otherwise({
			redirectTo: '/'
		});
		$locationProvider.html5Mode(true);
	}
]); 
