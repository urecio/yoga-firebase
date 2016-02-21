'use strict';

/**
 * profile module.
 * @ngdoc overview
 * @name profile
 * @description
 *
 * # Main module of the feature.
 */


(function(){

  
  

  function profile( $stateProvider ) {

    

    $stateProvider.state('profile', {
      url: '/profile', 
      controller: 'profileController as profileController',     
      templateUrl: 'components/profile/views/profile.view.html',  
    });

    

  }

  angular.module('yogaSequence.profile', [
    
    'ui.router'
    
  ])
    .config(profile);
})();
