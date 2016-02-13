'use strict';

/**
 * Karma unit tests.
 */
describe('ashanasService', function(){

  var ashanasservice;

  beforeEach(module('yogaSequence.API'));

  beforeEach(inject(function($injector) {
    service = $injector.get('ashanas');
  }));

});
