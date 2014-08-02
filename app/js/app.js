'use strict';

// Declare app level module which depends on filters, and services
angular.module("tycoonsApp", [
	'ngRoute',
	'tycoonsApp.moduleControllers',
	'tycoonsApp.moduleDirectives'
]).
config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', { 
		  templateUrl: 'pages/home.html', 
		  controller: 'helloWorldCtrl'
	})
	.when('/about-us', { 
		  templateUrl: 'pages/about.html', 
		  controller: 'contentPagesCtrl'
	})
	.when('/join-us', { 
		  templateUrl: 'pages/joinus.html', 
		  controller: 'contentPagesCtrl'
	})
	.when('/clients', { 
		  templateUrl: 'pages/clients.html', 
		  controller: 'contentPagesCtrl'
	})
	.when('/terms-and-conditions', { 
		  templateUrl: 'pages/terms.html', 
		  controller: 'contentPagesCtrl'
	})		
	.otherwise({ 
		  redirectTo: '/' 
	});
}]);