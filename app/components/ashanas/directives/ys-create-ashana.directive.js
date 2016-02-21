'use strict';

/**
 * ysCreateAshana Directive.
 *
 * @ngdoc overview
 * @name  ashanas.directive:ysCreateAshana
 * @description
 */

(function(){

  function ysCreateAshanaDirective(Ashanas) {

    return {
      controller: function() {
        var self = this;

        this.createAshana = function () {
          Ashanas.create(this.ashana).then(function (ashana) {
            if ( self.ashanas ) self.ashanas.push(ashana);
          });
        };
        this.ashanaFields = [
          {
            key: 'name',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'Name',
                placeholder: 'Enter a name',
                required: true
            }
        }
        ];
      },
      controllerAs: 'ysCreateAshanaController',
      bindToController: {
        ashanas: '='
      },
      scope: {},
      restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
      templateUrl: 'components/ashanas/views/ys-create-ashana.view.html'
    };

  }

  angular.module('yogaSequence.ashanas')
    .directive('ysCreateAshana',ysCreateAshanaDirective);
})();
