'use strict';

/**
 * @ngdoc function
 * @name capacitameApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the capacitameApp
 */
angular.module('capacitameApp')
  .controller('LoginCtrl', function () {
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
      $('.button-collapse').sideNav();
        $('.button-collapse').sideNav('hide');
      $('.dropdown-button').dropdown({ hover: true, constrain_width: true, belowOrigin: true, alignment: 'right' });
      $('.parallax').parallax();
   });
  });