'use strict';

/**
 * Karma unit tests.
 */
describe('SequencesService', function(){

  var Sequencesservice;

  beforeEach(module('yogaSequence.sequences'));

  beforeEach(inject(function($injector) {
    service = $injector.get('Sequences');
  }));

});
