'use strict';

/**
 * builder module.
 * @ngdoc overview
 * @name builder
 * @description
 *
 * # Main module of the feature.
 */


(function(){

  function builder( $stateProvider ) {

    

    $stateProvider.state('builder', {
      url: '/builder',
      controller: 'builderController as builderController', 
      templateUrl: '/Users/unairecio/sources/yoga-firebase/app/components/builder/views/builder.view.html',  
    });

    

  }

  angular.module('yogaSequence.builder', [])
    .config(builder);
})();
