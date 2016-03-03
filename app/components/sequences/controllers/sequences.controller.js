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

    this.setAshana = function (sequenceId, ashanaId, sequenceIndex) {

      var sequenceAshanas = this.sequences[sequenceIndex].ashanas;
      var lastAshanaOfSequence = sequenceAshanas[sequenceAshanas.length - 1];
      var sequenceAshanasMaxOrder = (lastAshanaOfSequence && lastAshanaOfSequence.order) || 0;
      var newMaxOrder = sequenceAshanasMaxOrder + 1;

      Sequences.setAshana(sequenceId, ashanaId, newMaxOrder).then(function (ashana) {
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

    this.onDropComplete = function (selectedIndex, obj, evt, sequenceIndex) {
      var sequence = this.sequences[sequenceIndex];
      var selectedObj = sequence.ashanas[selectedIndex];
      var targetIndex = sequence.ashanas.indexOf(obj);
      var selectedIndexOrder = sequence.ashanas[selectedIndex].order;

      sequence.ashanas[selectedIndex].order = obj.order
      sequence.ashanas[selectedIndex] = obj;

      sequence.ashanas[targetIndex].order = selectedIndexOrder;
      sequence.ashanas[targetIndex] = selectedObj;

// TODO fix this bug. it is suppose to update just one ashana and it deletes several... perhaps the id is not the sequenceAshanaId, but the real ashana id
      Sequences.updateSequenceAshana(sequence.ashanas[selectedIndex].id, {order: sequence.ashanas[selectedIndex].order});
      Sequences.updateSequenceAshana(sequence.ashanas[targetIndex].id, {order: sequence.ashanas[targetIndex].order});
    }

  }

  angular.module('yogaSequence.sequences')
    .controller('sequencesController',sequencesController);
})();
