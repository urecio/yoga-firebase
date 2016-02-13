'use strict';

/**
 * Karma unit tests.
 */
describe('Controller', function(){

  var Controller;

  beforeEach(module('yogaSequence.builder'));

  beforeEach(inject(function(_$rootScope_, _$controller_) {

    Controller = _$controller_('Controller', {
      $scope: _$rootScope_.$new()
    });

  }));

  it('should show a list of ashanas', function () {

  });

});
