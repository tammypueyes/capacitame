'use strict';

/**
 * @ngdoc function
 * @name capacitameApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the capacitameApp
 */
angular.module('capacitameApp')
  .controller('MenuCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $( document ).ready(function(){
        $('.button-collapse').sideNav();
        $('.button-collapse').sideNav('hide');
      $('.dropdown-button').dropdown({ hover: true, constrain_width: true, belowOrigin: true, alignment: 'right' });
      });
  });
