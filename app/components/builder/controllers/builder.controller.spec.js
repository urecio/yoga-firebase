'use strict';

/**
 * Karma unit tests.
 */
describe('builderController', function(){

  var builderController;

  beforeEach(module('yogaSequence.builder'));

  beforeEach(inject(function(_$rootScope_, _$controller_) {

    builderController = _$controller_('builderController', {
      $scope: _$rootScope_.$new()
    });

  }));

});
