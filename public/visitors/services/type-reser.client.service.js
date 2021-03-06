// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'articles' service
angular.module('visitors').factory('TypeReser', ['$resource', function($resource) {
	// Use the '$resource' service to return an article '$resource' object
    return $resource('api/typereser/:reserId', {
        reserId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);