// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'visitors' module routes
angular.module('visitors').config(['$routeProvider','$locationProvider',
	function($routeProvider,$locationProvider) {
		$routeProvider.
		when('/visitors', {
			templateUrl: 'visitors/views/visitors.client.view.html'
		}).

		// 最新消息相關
		when('/visitors/articles',{
			templateUrl: 'articles/views/list-articles.client.view.html'
		}).
		when('/visitors/articles/:articleId', {
			templateUrl: 'articles/views/view-article.client.view.html'
		}).

		when('/visitors/intro',{
			templateUrl: 'visitors/views/visitorsIntro.client.view.html'
		}).

		// 房型介紹相關
		when('/visitors/room',{
			templateUrl: 'visitors/views/room/visitorsRoom.client.view.html'
		}).
		when('/visitors/room/single',{
			templateUrl: 'visitors/views/room/visitorsRoomSingle.client.view.html'
		}).
		when('/visitors/room/double',{
			templateUrl: 'visitors/views/room/visitorsRoomDouble.client.view.html'
		}).
		when('/visitors/room/four',{
			templateUrl: 'visitors/views/room/visitorsRoomFour.client.view.html'
		}).

		// 訂單相關
		when('/visitors/reser',{
			templateUrl: 'visitors/views/reser/visitorsReser.client.view.html'
		}).
		when('/visitors/reser/single',{
			templateUrl: 'visitors/views/reser/single-reser.client.view.html'
		}).
		when('/visitors/reser/double',{
			templateUrl: 'visitors/views/reser/double-reser.client.view.html'
		}).
		when('/visitors/reser/four',{
			templateUrl: 'visitors/views/reser/four-reser.client.view.html'
		}).
		when('/visitors/findreser',{
			templateUrl: 'visitors/views/reser/find-reser.client.view.html'
		}).
		when('/visitors/reser/:reserId',{
			templateUrl: 'visitors/views/reser/view-reser.client.view.html'
		}).
		when('/_admin/reser/:reserId', {
			templateUrl: 'visitors/views/reser/view-reser.client.view.html'
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
