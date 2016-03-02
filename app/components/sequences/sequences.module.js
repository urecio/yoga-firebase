'use strict';

/**
 * sequences module.
 * @ngdoc overview
 * @name sequences
 * @description
 *
 * # Main module of the feature.
 */


(function(){




  function sequences( $stateProvider ) {



    $stateProvider.state('baselayout.sequences', {
      url: '/sequences',
      controller: 'sequencesController as sequencesController',
      templateUrl: 'components/sequences/views/sequences.view.html',
      resolve: {
        sequences: function (Sequences) {
          // TODO: instead of getting all, here you should get the first 20? and then getting them on scroll from the page
          return Sequences.getAllWithAshanas();
        },
        ashanas: function (Ashanas) {
          return Ashanas.getAll();
        }
      }
    });



  }

  angular.module('yogaSequence.sequences', [

    'ui.router',
    'restangular'

  ])
    .config(sequences);
})();
