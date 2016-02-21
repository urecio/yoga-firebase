'use strict';

/**
 * Karma unit tests.
 */
describe('sequencesController', function(){

  var sequencesController;

  beforeEach(module('yogaSequence.sequences'));

  beforeEach(inject(function(_$rootScope_, _$controller_) {

    sequencesController = _$controller_('sequencesController', {
      $scope: _$rootScope_.$new()
    });

  }));

});
