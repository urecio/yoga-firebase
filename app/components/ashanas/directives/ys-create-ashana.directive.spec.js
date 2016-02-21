'use strict';

/**
 * Karma unit tests.
 */


 describe('ysCreateAshana Directive', function(){

  var $scope,
      element;

  beforeEach(function(){
    module('yogaSequence.ashanas');

    inject(function($injector){
      // inject things here
    });
  });

  beforeEach(function(){
    element = createDirective('<div ys-create-ashana></div>');
    $scope = element.scope();
  });

  it('should do directive things', function () {
    // Test me
  });

});
