'use strict';

/**
 * sequences controller.
 *
 * @ngdoc overview
 * @name  sequencesController
 * @description
 */
(function(){

  function sequencesController($scope, sequences, Sequences, ashanas) {

    var self = this;

    this.sequences = sequences;
    this.ashanas = ashanas;
    this.deleteById = Sequences.deleteById;
    this.setAshana = function (sequenceId, ashanaId) {
      Sequences.setAshana(sequenceId, ashanaId).then(function (ashana) {
        // get ashana data
        var ashanaLocal = angular.copy(_.find(self.ashanas, {id: ashanaId}));
        // extend with data from json server
        angular.extend(ashanaLocal, ashana);
        // insert into the sequence
        _.find(self.sequences, {id: sequenceId}).ashanas.push(ashanaLocal);
      });
    };
    this.removeAshana = function (sequenceId, ashanaId, sequenceIndexOnRepeater, ashanaIndexOnRepeater) {
      console.log(sequenceIndexOnRepeater, ashanaIndexOnRepeater);
      Sequences.removeAshana(null, ashanaId).then(function () {
        self.sequences[sequenceIndexOnRepeater].ashanas.splice(ashanaIndexOnRepeater, 1)
      });
    };
    this.onDropComplete = function (ashanaIndex, obj, evt, sequenceIndex) {
      var sequence = this.sequences[sequenceIndex];
      var otherObj = sequence.ashanas[ashanaIndex];
      var otherIndex = sequence.ashanas.indexOf(obj);
      sequence.ashanas[ashanaIndex] = obj;
      sequence.ashanas[otherIndex] = otherObj;
    }

  }

  angular.module('yogaSequence.sequences')
    .controller('sequencesController',sequencesController);
})();
