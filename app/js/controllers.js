'use strict';

angular.module('tycoonsApp.moduleControllers', [])
	.controller('navCtrl', ['$scope', '$location' , function($scope, $location){
		$scope.items = [
			{name: 'About Us', path: '#about-us' },
			{name: 'Join us', path: '#join-us' },
			{name: 'Clients', path: '#clients' }
		];
		$scope.isActive = function(item){
			if(item.path == "#" + $location.path()) {
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
	
	});