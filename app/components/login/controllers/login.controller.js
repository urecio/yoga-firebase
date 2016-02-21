'use strict';

/**
 * login controller.
 *
 * @ngdoc overview
 * @name  loginController
 * @description
 */
(function(){

  function loginController() {

    var self = this;

    this.foo = 'bar';

  }

  angular.module('yogaSequence.login')
    .controller('loginController',loginController);
})();
