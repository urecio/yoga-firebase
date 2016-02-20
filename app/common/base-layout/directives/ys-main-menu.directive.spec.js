'use strict';

/**
 * Karma unit tests.
 */


 describe('ysMainMenu Directive', function(){

  var $scope,
      element;

  beforeEach(function(){
    module('yogaSequence.baseLayout');

    inject(function($injector){
      // inject things here
    });
  });

  beforeEach(function(){
    element = createDirective('<div ys-main-menu></div>');
    $scope = element.scope();
  });

  it('should do directive things', function () {
    // Test me
  });

});
