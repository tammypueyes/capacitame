'use strict';

/**
 * @ngdoc function
 * @name capacitameApp.controller:ContactoCtrl
 * @description
 * # ContactoCtrl
 * Controller of the capacitameApp
 */
angular.module('capacitameApp')
  .controller('ContactoCtrl', function ($scope) {
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
      
    });
    $scope.myFunction=function() {
    alert("Su mensaje ha sido enviado correctamente");
	}
  });
