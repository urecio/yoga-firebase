'use strict';

/**
 * login module.
 * @ngdoc overview
 * @name login
 * @description
 *
 * # Main module of the feature.
 */


(function(){

  
  

  function login( $stateProvider ) {

    

    $stateProvider.state('login', {
      url: '/login', 
      controller: 'loginController as loginController',     
      templateUrl: 'components/login/views/login.view.html',  
    });

    

  }

  angular.module('yogaSequence.login', [
    
    'ui.router'
    
  ])
    .config(login);
})();
