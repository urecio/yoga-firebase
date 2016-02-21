'use strict';

/**
 * Karma unit tests.
 */
describe('ashanasService', function(){

  var ashanasservice;

  beforeEach(module('yogaSequence.ashanas'));

  beforeEach(inject(function($injector) {
    service = $injector.get('ashanas');
  }));

  it('should bring a list of ashanas', function () {

  });
  it('should bring one ashana', function () {

  });
  it('should update an ashana', function () {

  });
  it('should delete an ashana', function () {

  });
  it('should create a new ashana', function () {

  });

});
