'use strict';

/**
 * @ngdoc function
 * @name capacitameApp.controller:SercapacitadorCtrl
 * @description
 * # SercapacitadorCtrl
 * Controller of the capacitameApp
 */
angular.module('capacitameApp')
  .controller('SercapacitadorCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var vm = this;
    vm.menuTemplate = {
    	url: 'views/menu.html'
    };
     $( document ).ready(function(){
        $('.button-collapse').sideNav();
        $('.button-collapse').sideNav('hide');
      $('.dropdown-button').dropdown({ hover: true, constrain_width: true, belowOrigin: true, alignment: 'right' });
      
      });
  });
