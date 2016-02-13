'use strict';

/**
 *  controller.
 *
 * @ngdoc overview
 * @name  Controller
 * @description
 */
(function(){

  function Controller() {

    var self = this;

    this.foo = 'bar';

  }

  angular.module('yogaSequence.builder')
    .controller('Controller',Controller);
})();
