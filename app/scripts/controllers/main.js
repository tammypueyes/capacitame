'use strict';

/**
 * @ngdoc function
 * @name capacitameApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the capacitameApp
 */
angular.module('capacitameApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var vms = this;
    vms.menusTemplate = {
    	url: 'views/menu_sinlogin.html'
    };
    $(document).ready(function(){
      $('.parallax').parallax();
    });
  });
