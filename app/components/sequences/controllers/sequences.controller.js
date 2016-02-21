'use strict';

/**
 * sequences controller.
 *
 * @ngdoc overview
 * @name  sequencesController
 * @description
 */
(function(){

  function sequencesController() {

    var self = this;

    this.foo = 'bar';

  }

  angular.module('yogaSequence.sequences')
    .controller('sequencesController',sequencesController);
})();
