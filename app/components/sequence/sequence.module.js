'use strict';

/**
 * sequence module.
 * @ngdoc overview
 * @name sequence
 * @description
 *
 * # Main module of the feature.
 */


(function(){




  function sequence( $stateProvider ) {



    $stateProvider.state('baselayout.sequence', {
      url: '/sequence/{sequenceId}',
      controller: 'sequenceController as sequenceController',
      templateUrl: 'components/sequence/views/sequence.view.html',
      resolve: {
        sequence: function ($stateParams) {
          return Sequences.getById($stateParams.get('sequenceId'));
        }
      }
    });



  }

  angular.module('yogaSequence.sequence', [

    'ui.router',
    'restangular',
    'ui.bootstrap',
    'yogaSequence.sequences'

  ])
    .config(sequence);
})();
