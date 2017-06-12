'use strict';

/**
 * @ngdoc function
 * @name capacitameApp.controller:MisCapacitacionesCtrl
 * @description
 * # MisCapacitacionesCtrl
 * Controller of the capacitameApp
 */
angular.module('capacitameApp')
  .controller('MisCapacitacionesCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var vm = this;
    vm.menuTemplate = {
    	url: 'views/menu.html'
    };
  });
