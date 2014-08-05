'use strict';

// Declare app level module which depends on filters, and services
angular.module("tycoonsApp", [
	'ngRoute',
	'tycoonsApp.moduleControllers',
	'tycoonsApp.moduleDirectives',
	'tycoonsApp.moduleServices'
]).
config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', { 
		  templateUrl: 'pages/home.html', 
		  controller: 'helloWorldCtrl',
		  requireLogin: false
	})
	.when('/about-us', { 
		  templateUrl: 'pages/about.html', 
		  controller: 'contentPagesCtrl',
		  requireLogin: false
	})
	.when('/join-us', { 
		  templateUrl: 'pages/joinus.html', 
		  controller: 'contentPagesCtrl',
		  requireLogin: false
	})
	.when('/clients', { 
		  templateUrl: 'pages/clients.html', 
		  controller: 'contentPagesCtrl',
		  requireLogin: true
	})
	.when('/terms-and-conditions', { 
		  templateUrl: 'pages/terms.html', 
		  controller: 'contentPagesCtrl',
		  requireLogin: true
	})
	.when('/login', { 
		  templateUrl: 'pages/login.html', 
		  controller: 'loginFormCtrl',
		  requireLogin: true
	})
	.otherwise({ 
		  redirectTo: '/' 
	});
}])
.run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth) {
    $rootScope.$on('$routeChangeStart', function (event) {
        if (!Auth.isLoggedIn()) {
            console.log('DENY');
            event.preventDefault();
            $location.path('/login');
        }
        else {
            console.log('ALLOW');
        }
    });
}]);