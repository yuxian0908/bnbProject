// Invoke 'strict' JavaScript mode
'use strict';

// Set the main application name
var mainApplicationModuleName = 'mean';

// Create the main application
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngResource', 'ngRoute', 'users', 'visitors', 'articles','ui.router']);

// Configure the hashbang URLs using the $locationProvider services 
mainApplicationModule.config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
		$locationProvider.html5Mode(true);
	}
]);

// Fix Facebook's OAuth bug
if (window.location.hash === '#_=_') window.location.hash = '#!';

// Manually bootstrap the AngularJS application
angular.element(document).ready(function() {
	angular.bootstrap(document, [mainApplicationModuleName]);
});