'use strict';

/**
 * ashanas controller.
 *
 * @ngdoc overview
 * @name  ashanasController
 * @description
 */
(function(){

  function ashanasController(ashanas, Ashanas) {
    var self = this;

    this.ashanas = ashanas;
    this.deleteById = function (id) {
      Ashanas.deleteById(id).then(function () {
        _.remove(self.ashanas, {id: id});
      });
    };
    
  }

  angular.module('yogaSequence.ashanas')
    .controller('ashanasController',ashanasController);
})();
