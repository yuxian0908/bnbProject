// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'articles' service
angular.module('visitors').factory('Resers', ['$resource', function($resource) {
	// Use the '$resource' service to return an article '$resource' object
    return $resource('api/reser/:reserId', {
        reserId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);