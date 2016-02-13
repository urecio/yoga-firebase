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
  'ngSanitize',

  /* COMMONS */
  'yogaSequence.cache',
  /* END COMMONS */

  /* COMPONENTS */
  'yogaSequence.home',
  /* END COMPONENTS */
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');
  });
