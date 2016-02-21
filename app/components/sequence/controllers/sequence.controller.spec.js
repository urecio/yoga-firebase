'use strict';

/**
 * Karma unit tests.
 */
describe('sequenceController', function(){

  var sequenceController;

  beforeEach(module('yogaSequence.sequence'));

  beforeEach(inject(function(_$rootScope_, _$controller_) {

    sequenceController = _$controller_('sequenceController', {
      $scope: _$rootScope_.$new()
    });

  }));

});
