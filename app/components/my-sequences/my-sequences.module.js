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

    

    $stateProvider.state('mysequences', {
      url: '/mySequences', 
      controller: 'mySequencesController as mySequencesController',     
      templateUrl: 'components/my-sequences/views/my-sequences.view.html',  
    });

    

  }

  angular.module('yogaSequence.mySequences', [
    
    'ui.router'
    
  ])
    .config(mySequences);
})();
