'use strict';

/**
 * Karma unit tests.
 */
describe('ashanasController', function(){

  var ashanasController;

  beforeEach(module('yogaSequence.ashanas'));

  beforeEach(inject(function(_$rootScope_, _$controller_) {

    ashanasController = _$controller_('ashanasController', {
      $scope: _$rootScope_.$new()
    });

  }));

});
