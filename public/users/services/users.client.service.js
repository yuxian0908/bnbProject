// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'articles' service
angular.module('users').factory('Users', ['$resource',
 function($resource) {
	// Use the '$resource' service to return an article '$resource' object
    return $resource('api/signin/:userId', {
        userId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);