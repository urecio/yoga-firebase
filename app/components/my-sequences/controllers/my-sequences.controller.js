'use strict';

/**
 * mySequences controller.
 *
 * @ngdoc overview
 * @name  mySequencesController
 * @description
 */
(function(){

  function mySequencesController() {

    var self = this;

    this.foo = 'bar';

  }

  angular.module('yogaSequence.mySequences')
    .controller('mySequencesController',mySequencesController);
})();
