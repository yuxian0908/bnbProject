// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'articles' module routes
angular.module('articles').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/_admin/articles', {
			templateUrl: 'articles/views/list-articles.client.view.html'
		}).
		when('/_admin/articles/create', {
			templateUrl: 'articles/views/create-article.client.view.html'
		}).
		when('/_admin/articles/:articleId', {
			templateUrl: 'articles/views/view-article.client.view.html'
		}).
		when('/_admin/articles/:articleId/edit', {
			templateUrl: 'articles/views/edit-article.client.view.html'
		});
	}
]); 