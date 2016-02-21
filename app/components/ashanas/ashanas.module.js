'use strict';

/**
 * ashanas module.
 * @ngdoc overview
 * @name ashanas
 * @description
 *
 * # Main module of the feature.
 */


(function(){




  function ashanas( $stateProvider ) {



    $stateProvider.state('baselayout.ashanas', {
      url: '/ashanas',
      controller: 'ashanasController as ashanasController',
      templateUrl: 'components/ashanas/views/ashanas.view.html',
      resolve: {
        ashanas: function (Ashanas) {
          return Ashanas.getAll();
        }
      }
    });



  }

  angular.module('yogaSequence.ashanas', [
    'ui.router',
    'restangular',
    'yogaSequence.env',
    'smart-table'
  ])
    .config(ashanas);
})();
