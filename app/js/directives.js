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
	})
	
	.directive('productDescription', function(){
		return{
			restrict: 'E',
			templateUrl: 'partials/product-description.html'
		};
	})
	
	.directive('productRatings', function(){
		return{
			restrict: 'E',
			templateUrl: 'partials/product-ratings.html'
		};
	})
	
	.directive('productSpecifications', function(){
		return{
			restrict: 'E',
			templateUrl: 'partials/product-specifications.html',
			controller: 'ReviewController',
			controllerAs: 'reviewCtrl'
		};
	})
	
	.directive('productGallery', function(){
		return{
			restrict: 'E',
			templateUrl: 'partials/product-gallery.html',
			controller: 'GalleryController',
			controllerAs: 'gallery'
		};
	});
