'use strict';

/**
 * home controller.
 *
 * @ngdoc overview
 * @name  homeController
 * @description
 */
(function(){

  function homeController() {

    var self = this;

    this.foo = 'bar';

  }

  angular.module('yogaSequence.home')
    .controller('homeController',homeController);
})();
