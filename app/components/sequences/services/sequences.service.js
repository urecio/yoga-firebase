'use strict';

(function(){

  /**
   * @ngdoc service
   * @name  SequencesService
   * @description
   */
  function SequencesService(Restangular) {

    this.getAll = function () {
      return Restangular.all('sequences').getList();
    };

    this.getAllWithAshanas = function () {
      return Restangular.all('sequences').customGETLIST(null, {_embed: 'ashanas'}).then(function (sequences) {

        _.each(sequences, function (seq, seqIndex) {

          // sorting by order
          seq.ashanas = _.sortBy(seq.ashanas, 'order');

          // getting real ashana content
          _.each(seq.ashanas, function (ashana, asIndex) {
            Restangular.one('ashanas', ashana.ashanaId).get().then(function (ashana) {
              delete ashana.id;
              angular.extend(sequences[seqIndex].ashanas[asIndex], ashana);
            });
          });

        });

        return sequences;
      });
    };

    this.getById = function (id) {
      return Restangular.one('sequences', id).get();
    };

    this.deleteById = function (id) {
      return Restangular.one('sequences', id).remove();
    };

    this.setAshana = function (sequenceId, ashanaId, order) {
      return Restangular.one('sequences', sequenceId).all('ashanas').post({ashanaId: ashanaId, order: order});
    };

    this.updateSequenceAshana = function (sequenceAshanaId, data) {
      return Restangular.one('ashanas', sequenceAshanaId).patch(data);
    };

    this.removeAshana = function (sequenceId, ashanaId) {
      // if sequenceId is not specified, is because it is using the unique ashana.id generated for the ashanas in sequences
      if (!sequenceId) return Restangular.one('ashanas', ashanaId).remove();
      else return Restangular.customDELETE('ashanas', {sequenceId: sequenceId, ashanaId: ashanaId});
    }
  }

  angular.module('yogaSequence.sequences')
    .service('Sequences',SequencesService);
})();
