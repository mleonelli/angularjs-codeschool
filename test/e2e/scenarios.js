'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('gemStore', function() {

  browser.get('index.html');

  it('ReviewController should add a review on AddReview', function() {
	var gemList = element.all(by.repeater('review in product.reviews'));
    var stars = element(by.model('reviewCtrl.review.stars'));
	var body = element(by.model('reviewCtrl.review.body'));
	var author = element(by.model('reviewCtrl.review.author'));
	
    expect(gemList.count()).toBe(3);

    stars.sendKeys('5');
	body.sendKeys('test');
	author.sendKeys('test@test.com');
	
	//var elem = ptor.findElement(protractor.By.id('StartJobButton'));
	//elem.click().then( //stuff ).
	
    //expect(phoneList.count()).toBe(4);

  }));
  
  /*it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });*/

});
