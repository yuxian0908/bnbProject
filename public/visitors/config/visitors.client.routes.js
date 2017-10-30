// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'visitors' module routes
angular.module('visitors').config(['$routeProvider','$locationProvider',
	function($routeProvider,$locationProvider) {
		$routeProvider.
		when('/visitors', {
			templateUrl: 'visitors/views/visitors.client.view.html'
		}).
		when('/visitors/articles',{
			templateUrl: 'articles/views/list-articles.client.view.html'
		}).
		when('/visitors/articles/:articleId', {
			templateUrl: 'articles/views/view-article.client.view.html'
		}).
		when('/visitors/intro',{
			templateUrl: 'visitors/views/visitorsIntro.client.view.html'
		}).
		when('/visitors/room',{
			templateUrl: 'visitors/views/visitorsRoom.client.view.html'
		}).
		when('/visitors/reser',{
			templateUrl: 'visitors/views/visitorsReser.client.view.html'
		}).
		when('/visitors/reser/:reserId',{
			templateUrl: 'visitors/views/view-reser.client.view.html'
		}).
		when('/_admin/reser/:reserId', {
			templateUrl: 'visitors/views/view-reser.client.view.html'
		}).
		when('/visitors/nearby',{
			templateUrl: 'visitors/views/visitorsNearby.client.view.html'
		}).
		when('/visitors/loc',{
			templateUrl: 'visitors/views/visitorsLoc.client.view.html'
		}).
		when('/visitors/infor',{
			templateUrl: 'visitors/views/visitorsInfor.client.view.html'
		}).
		otherwise({
			redirectTo: '/visitors'
		});
		$locationProvider.html5Mode(true);
	}
]); 
