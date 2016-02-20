'use strict';

/**
 * baseLayout controller.
 *
 * @ngdoc overview
 * @name  baseLayoutController
 * @description
 */
(function(){

  function baseLayoutController() {

    var self = this;

    this.foo = 'bar';

  }

  angular.module('yogaSequence.baseLayout')
    .controller('baseLayoutController',baseLayoutController);
})();
