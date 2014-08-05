'use strict';

angular.module('tycoonsApp.moduleControllers', [])
	.controller('navCtrl', ['$scope', '$location' , function($scope, $location){
		$scope.items = [
			{name: 'About Us', path: '#about-us', pathname: '/about-us' },
			{name: 'Join us', path: '#join-us', pathname: '/join-us' },
			{name: 'Clients', path: '#clients', pathname: '/clients' }
		];
		$scope.isActive = function(item){
			if(item.pathname == $location.path()) {
				return true;
			} else {
				return false;	
			}
		};
				
	}])
	.controller('helloWorldCtrl', function($scope){
		$scope.name = "Hello World!";	
	})
	.controller('contentPagesCtrl', function($scope) {
	
	})
	.controller('loginFormCtrl', ['$scope','$location','Auth', function($scope, $location, Auth) {
	  // hide error messages until 'submit' event
		$scope.submitted = false;
		$scope.submit = function() {
			if($scope.username && $scope.password) {
				var valid = Auth.authorize($scope.username, $scope.password);
				if(valid) { 
					$location.path('/');
				} else {
					alert("Invaid Login Crendentials");
				}
			} else {
				alert("Please enter valid username and password");
			}
		};
	}]);