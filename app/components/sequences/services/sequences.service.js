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

          _.each(seq.ashanas, function (ashana, asIndex) {
            Restangular.one('ashanas', ashana.ashanaId).get().then(function (ashana) {
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

    this.setAshana = function (sequenceId, ashanaId) {
      return Restangular.one('sequences', sequenceId).all('ashanas').post({ashanaId: ashanaId});
    };

    this.removeAshana = function (sequenceId, ashanaId) {
      return Restangular.customDELETE('ashanas', {sequenceId: sequenceId, ashanaId: ashanaId});
    }
  }

  angular.module('yogaSequence.sequences')
    .service('Sequences',SequencesService);
})();
