'use strict';

/**
 * profile controller.
 *
 * @ngdoc overview
 * @name  profileController
 * @description
 */
(function(){

  function profileController() {

    var self = this;

    this.foo = 'bar';

  }

  angular.module('yogaSequence.profile')
    .controller('profileController',profileController);
})();
