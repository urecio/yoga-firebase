'use strict';

/**
 * baseLayout module.
 * @ngdoc overview
 * @name baseLayout
 * @description
 *
 * # Main module of the feature.
 */


(function(){




  function baseLayout( $stateProvider ) {



    $stateProvider.state('baselayout', {
      abstract: true,
      controller: 'baseLayoutController as baseLayoutController',
      templateUrl: 'common/base-layout/views/base-layout.view.html',
    });



  }

  angular.module('yogaSequence.baseLayout', [
    'ui.router'
  ])
    .config(baseLayout);
})();
