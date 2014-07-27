'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('gemStore.controllers'));


  it('ReviewController should be defined', inject(function($controller) {
    //spec body
    var reviewCtrl = $controller('ReviewController', { $scope: {} });
    expect(reviewCtrl).toBeDefined();
  }));
  
  /*it('ReviewController should add a review on AddReview', inject(function($controller) {
    var scope = {},
        reviewCtrl = $controller('ReviewController', { $scope: scope });
	var product = {};
		product.reviews = {};
	scope.review = {};
	reviewCtrl.addReview(product);
    expect(product.reviews.length).toBe(1);
  }));*/
  
  it('GalleryController should be defined', inject(function($controller) {
    //spec body
    var galleryCtrl = $controller('GalleryController', { $scope: {} });
    expect(galleryCtrl).toBeDefined();
  }));
  
  /*it('GalleryController should set current', inject(function($controller) {
    var scope = {};
    var galleryCtrl = $controller('GalleryController', { $scope: scope });
	
	scope.current = 0;
	galleryCtrl.setCurrent(1);
    expect(scope.current).toBe(1);
  }));*/
  
  it('TabController should be defined', inject(function($controller) {
    //spec body
    var tabCtrl = $controller('TabController', { $scope: {} });
    expect(tabCtrl).toBeDefined();
  }));
  
  it('StoreController should be defined', inject(function($controller) {
    //spec body
    var storeCtrl = $controller('StoreController', { $scope: {} });
    expect(storeCtrl).toBeDefined();
  }));
  
});
