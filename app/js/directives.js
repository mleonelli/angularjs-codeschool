'use strict';

/* Directives */


angular.module('gemStore.directives', [])

	.directive('appVersion', ['version', function(version) {
		return function(scope, elm, attrs) {
			elm.text(version);
		};
	}])
	
	.directive('productTitle', function(){
		return{
			restrict: 'E',
			templateUrl: 'partials/product-title.html'
		};
	});
