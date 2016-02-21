'use strict';

/**
 * Karma unit tests.
 */
describe('mySequencesController', function(){

  var mySequencesController;

  beforeEach(module('yogaSequence.mySequences'));

  beforeEach(inject(function(_$rootScope_, _$controller_) {

    mySequencesController = _$controller_('mySequencesController', {
      $scope: _$rootScope_.$new()
    });

  }));

});
