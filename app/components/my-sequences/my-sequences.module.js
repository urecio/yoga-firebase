'use strict';

/**
 * mySequences module.
 * @ngdoc overview
 * @name mySequences
 * @description
 *
 * # Main module of the feature.
 */


(function(){




  function mySequences( $stateProvider ) {



    $stateProvider.state('baselayout.private.mysequences', {
      url: '/mySequences',
      controller: 'mySequencesController as mySequencesController',
      templateUrl: 'components/my-sequences/views/my-sequences.view.html',
      resolve: {
        mySequences: function (Sequences, user) {
          Sequences.getAllByUserId(user.id);
        }
      }
    });



  }

  angular.module('yogaSequence.mySequences', [

    'ui.router',
    'restangular'

  ])
    .config(mySequences);
})();
