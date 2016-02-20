'use strict';

/**
 * builder controller.
 *
 * @ngdoc overview
 * @name  builderController
 * @description
 */
(function(){

  function builderController() {

    var self = this;

    this.foo = 'bar';

  }

  angular.module('yogaSequence.builder')
    .controller('builderController',builderController);
})();
