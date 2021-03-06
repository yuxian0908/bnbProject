// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'visitors' controller
angular.module('visitors').controller('VisitorsController', ['$scope', '$routeParams', '$location', 'Authentication', 'Resers', 'FindResers','TypeReser',
	function($scope, $routeParams, $location, Authentication, Resers, FindResers, TypeReser) {
		// Expose the authentication service
        $scope.authentication = Authentication;
        
        $scope.today = new Date();

		$scope.placeReser = function() {
            // Use the form fields to create a new article $resource object
            var reser = new Resers({
                type: this.type,
                date: this.date,
                enddate: this.enddate,
                phone: this.phone1+'-'+this.phone2+'-'+this.phone3,
                name:　this.name
            });
            // Use the reser '$save' method to send an appropriate POST request
            reser.$save(function(response) {
            	// If an reser was created successfully, redirect the user to the article's page 
                $location.path('/visitors/reser/' + response._id);
            }, function(errorResponse) {
            	// Otherwise, present the user with the error message
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.findvisitorReser = function() {
        	// Use the article 'query' method to send an appropriate GET request
                $scope.visitorReser = FindResers.query({
                    name: this.name,
                    phone: this.phone1+'-'+this.phone2+'-'+this.phone3
                },function(res){
                    if(res.length==0){
                        alert('查無紀錄');
                    }
                });
        };
        $scope.findtypereser = function(type){
            // 查詢剩餘房間
            var Type = type;
            if(Type=="單人房"){
                $scope.type = "單人房";
            }else if(Type=="雙人房"){
                $scope.type = "雙人房";
            }else{
                $scope.type = "四人房";
            }
            $scope.typeReser = TypeReser.query({
                type:Type
            },function(res){
                console.log(res);
            });
        }
        // Create a new controller method for retrieving a list of articles
        $scope.find = function() {
        	// Use the article 'query' method to send an appropriate GET request
                $scope.resers = Resers.query();
        };

        $scope.findOne = function() {
        	// Use the article 'get' method to send an appropriate GET request
            $scope.reser = Resers.get({
                reserId: $routeParams.reserId
            });
        };
        $scope.delete = function(reser) {
        	// If an article was sent to the method, delete it
            if (reser) {
            	// Use the article '$remove' method to delete the article
                reser.$remove(function() {
                	// Remove the article from the articles list
                    for (var i in $scope.resers) {
                        if ($scope.resers[i] === reser) {
                            $scope.resers.splice(i, 1);
                        }
                    }
                });
            } else {
            	// Otherwise, use the article '$remove' method to delete the article
                $scope.reser.$remove(function() {
                    $location.path('_admin/reser');
                    window.location.reload("_admin/reser");
                });
            }
        };
	}
]);
