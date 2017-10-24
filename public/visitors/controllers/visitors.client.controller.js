// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'visitors' controller
angular.module('visitors').controller('VisitorsController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// Expose the authentication service
		$scope.authentication = Authentication;
	}
]);
