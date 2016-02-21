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

    

    $stateProvider.state('sequences', {
      url: '/sequences', 
      controller: 'sequencesController as sequencesController',     
      templateUrl: 'components/sequences/views/sequences.view.html',  
    });

    

  }

  angular.module('yogaSequence.sequences', [
    
    'ui.router'
    
  ])
    .config(sequences);
})();
