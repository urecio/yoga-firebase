'use strict';

/**
 * Karma unit tests.
 */
describe('loginController', function(){

  var loginController;

  beforeEach(module('yogaSequence.login'));

  beforeEach(inject(function(_$rootScope_, _$controller_) {

    loginController = _$controller_('loginController', {
      $scope: _$rootScope_.$new()
    });

  }));

});
