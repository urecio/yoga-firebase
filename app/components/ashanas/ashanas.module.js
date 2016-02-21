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



    $stateProvider.state('ashanas', {
      url: '/ashanas',
      controller: 'ashanasController as ashanasController',
      templateUrl: 'components/ashanas/views/ashanas.view.html',
    });



  }

  angular.module('yogaSequence.ashanas', [
    'ui.router'
  ])
    .config(ashanas);
})();
