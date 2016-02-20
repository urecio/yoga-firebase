'use strict';
/**
 * @ngdoc overview
 * @name yogaSequence
 * @description
 * @requires $urlRouterProvider
 * @requires $locationProvider
 *
 * Main module of the application.
 */
angular
.module('yogaSequence', [

    'ui.router',
    'ngSanitize',

    /* COMMONS */
    'yogaSequence.cache',
'yogaSequence.baseLayout',
/* END COMMON */

    /* COMPONENTS */
'yogaSequence.home',
'yogaSequence.profile',
'yogaSequence.ashanas',
'yogaSequence.ashana',
'yogaSequence.builder',
/* END COMPONENTS */

  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');
  });
