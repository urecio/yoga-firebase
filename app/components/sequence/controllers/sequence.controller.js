'use strict';

/**
 * sequence controller.
 *
 * @ngdoc overview
 * @name  sequenceController
 * @description
 */
(function(){

  function sequenceController() {

    var self = this;

    this.foo = 'bar';

  }

  angular.module('yogaSequence.sequence')
    .controller('sequenceController',sequenceController);
})();
