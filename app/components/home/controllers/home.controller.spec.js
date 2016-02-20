'use strict';

/**
 * Karma unit tests.
 */
describe('homeController', function(){

  var homeController;

  beforeEach(module('yogaSequence.home'));

  beforeEach(inject(function(_$rootScope_, _$controller_) {

    homeController = _$controller_('homeController', {
      $scope: _$rootScope_.$new()
    });

  }));

});
