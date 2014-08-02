'use strict';

angular.module('tycoonsApp.moduleDirectives', [])
	.directive('headerMenu', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/header.html'
		};
	})
	.directive('footerBlock', function(){
		return {
			restrict: 'A',
			templateUrl: 'partials/footer.html'
		};
	});