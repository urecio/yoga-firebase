'use strict';

/**
 * ashana module.
 * @ngdoc overview
 * @name ashana
 * @description
 *
 * # Main module of the feature.
 */


(function(){

  
  

  function ashana( $stateProvider ) {

    

    $stateProvider.state('ashana', {
      url: '/ashana',
      controller: 'ashanaController as ashanaController', 
      templateUrl: 'components/ashana/views/ashana.view.html',  
    });

    

  }

  angular.module('yogaSequence.ashana', [])
    .config(ashana);
})();
