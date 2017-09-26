'use strict';

/**
 * @ngdoc function
 * @name capacitameApp.controller:ComprarCtrl
 * @description
 * # ComprarCtrl
 * Controller of the capacitameApp
 */
angular.module('capacitameApp')
  .controller('ComprarCtrl', function ($scope,$http) {
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
      $scope.myFunction2=function() {
    alert("Su compra se ha realizado con exito");
    window.location.href='#!/principal';
	}
	$scope.myFunction3=function() {
    alert("Su compra se ha cancelado");
    window.location.href='#!/capacitaciones';
	}
  $scope.importar=function(){
    $http.get("listar.php").then(function(response){
      $scope.proyecto=response.data.records;
    });
  }
  $scope.importar();
  });

