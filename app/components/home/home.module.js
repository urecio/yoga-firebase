'use strict';

/**
 * home module.
 * @ngdoc overview
 * @name home
 * @description
 *
 * # Main module of the feature.
 */


(function(){




  function home( $stateProvider ) {



    $stateProvider.state('baselayout.home', {
      url: '/',
      controller: 'homeController as homeController',
      templateUrl: 'components/home/views/home.view.html',
    });



  }

  angular.module('yogaSequence.home', [
    'ui.router'
  ])
    .config(home);
})();
