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

    

    $stateProvider.state('sequence', {
      url: '/sequence', 
      controller: 'sequenceController as sequenceController',     
      templateUrl: 'components/sequence/views/sequence.view.html',  
    });

    

  }

  angular.module('yogaSequence.sequence', [
    
    'ui.router'
    
  ])
    .config(sequence);
})();
