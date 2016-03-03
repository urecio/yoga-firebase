'use strict';

(function(){

  /**
   * @ngdoc service
   * @name  ashanasService
   * @description
   */
  function ashanasService(Restangular) {
    this.create = function (data) {
      data.slug = _.snakeCase(data.name).replace(new RegExp('_', 'g'), '-');
      return Restangular.all('ashanas').post(data);
    };
    this.getAll = function () {
      return Restangular.all('ashanas').getList();
    };
    this.getById = function (id) {
      return Restangular.one('ashanas', id).get();
    };
    this.updateById = function (id, data) {
      return Restangular.one('ashanas', id).put(data);
    };
    this.deleteById = function (id) {
      return Restangular.one('ashanas', id).remove();
    };
  }

  angular.module('yogaSequence.ashanas')
    .service('Ashanas',ashanasService);
})();
