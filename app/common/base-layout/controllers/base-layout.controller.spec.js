'use strict';

/**
 * Karma unit tests.
 */
describe('baseLayoutController', function(){

  var baseLayoutController;

  beforeEach(module('yogaSequence.baseLayout'));

  beforeEach(inject(function(_$rootScope_, _$controller_) {

    baseLayoutController = _$controller_('baseLayoutController', {
      $scope: _$rootScope_.$new()
    });

  }));

});
