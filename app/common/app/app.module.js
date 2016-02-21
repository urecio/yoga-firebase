
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
    'restangular',
    'formly',
    'formlyBootstrap',

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
'yogaSequence.mySequences',
'yogaSequence.sequences',
'yogaSequence.sequence',
'yogaSequence.profile',
'yogaSequence.login',
/* END COMPONENTS */

  ])
  .config(function($urlRouterProvider, $locationProvider, RestangularProvider, API) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');

    RestangularProvider.setBaseUrl(API);
  });
