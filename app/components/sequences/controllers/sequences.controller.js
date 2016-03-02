'use strict';

/**
 * sequences controller.
 *
 * @ngdoc overview
 * @name  sequencesController
 * @description
 */
(function(){

  function sequencesController(sequences, Sequences, ashanas) {

    this.sequences = sequences;
    this.ashanas = ashanas;
    this.deleteById = Sequences.deleteById;
    this.setAshana = Sequences.setAshana;

  }

  angular.module('yogaSequence.sequences')
    .controller('sequencesController',sequencesController);
})();
