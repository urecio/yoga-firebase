'use strict';

/**
 * ysMainMenu Directive.
 *
 * @ngdoc overview
 * @name  baseLayout.directive:ysMainMenu
 * @description
 */

(function(){

  function ysMainMenuDirective() {

    return {
      // controller: function($scope, $element, $attrs, $transclude) {},
      // controllerAs: 'ysMainMenuController',
      // bindToController: true,
      // name: '',
      // priority: 1,
      // terminal: true,
      // scope: {}, // {} = isolate, true = child, false/undefined = no change
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
      templateUrl: 'common/base-layout/views/ys-main-menu.view.html',
      // replace: true,
      // transclude: true,
      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
      // link: function($scope, iElm, iAttrs, controller) {}
    };

  }

  angular.module('yogaSequence.baseLayout')
    .directive('ysMainMenu',ysMainMenuDirective);
})();
