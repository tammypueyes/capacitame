'use strict';

/**
 * @ngdoc function
 * @name capacitameApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the capacitameApp
 */
angular.module('capacitameApp')
  .factory('Emprendedor', ['$resource', function ($resource) {
        return $resource('http://localhost/capacitameAPI/emprendedor/:id', {id: "@_id"}, {
            update: {method: "PUT", params: {id: "@_id"}}
        })
    }])
  .controller('MenuCtrl', function ($scope, Emprendedor, $route) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    Emprendedor.get(function (data) {
            $scope.emprendedor = data.response;
            console.log($scope.emprendedor.nombre);
        })
    
    $scope.remove = function (id) {
            Emprendedor.delete({id: id}).$promise.then(function (data) {
                if (data.response) {
                    $route.reload();
                }
            })
        }
    $( document ).ready(function(){
       $('.button-collapse').sideNav();
        $('.button-collapse').sideNav('hide');
      $('.dropdown-button').dropdown({ hover: true, constrain_width: true, belowOrigin: true, alignment: 'right' });
      });
      
  });
