'use strict';

/**
 * Cache module.
 * @ngdoc overview
 * @name Cache
 * @requires angular-data.DSCacheFactory
 * @description
 *
 * # Main module of the feature.
 */

(function() {

  function Cache() {
  }

  angular.module('yogaSequence.cache', [
    'angular-data.DSCacheFactory',
  ]).config(Cache);
})();
