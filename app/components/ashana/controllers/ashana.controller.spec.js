'use strict';

/**
 * Karma unit tests.
 */
describe('ashanaController', function(){

  var ashanaController;

  beforeEach(module('yogaSequence.ashana'));

  beforeEach(inject(function(_$rootScope_, _$controller_) {

    ashanaController = _$controller_('ashanaController', {
      $scope: _$rootScope_.$new()
    });

  }));

});
