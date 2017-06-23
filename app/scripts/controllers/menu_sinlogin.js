'use strict';

/**
 * @ngdoc function
 * @name capacitameApp.controller:MenuSinloginCtrl
 * @description
 * # MenuSinloginCtrl
 * Controller of the capacitameApp
 */
angular.module('capacitameApp')
  .controller('MenuSinloginCtrl', function () {
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

