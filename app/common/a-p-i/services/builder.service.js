'use strict';

(function(){

  /**
   * @ngdoc service
   * @name  ashanasService
   * @description
   */
  function ashanasService() {
    this.foo = 'bar';
  }

  angular.module('yogaSequence.API')
    .service('ashanas',ashanasService);
})();
