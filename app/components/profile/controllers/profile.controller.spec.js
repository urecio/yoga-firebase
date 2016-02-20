'use strict';

/**
 * Karma unit tests.
 */
describe('profileController', function(){

  var profileController;

  beforeEach(module('yogaSequence.profile'));

  beforeEach(inject(function(_$rootScope_, _$controller_) {

    profileController = _$controller_('profileController', {
      $scope: _$rootScope_.$new()
    });

  }));

});
