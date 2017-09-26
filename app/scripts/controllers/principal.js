'use strict';

/**
 * @ngdoc function
 * @name capacitameApp.controller:PrincipalCtrl
 * @description
 * # PrincipalCtrl
 * Controller of the capacitameApp
 */
angular.module('capacitameApp')
  .factory('Miscapacitaciones', ['$resource', function ($resource) {
        return $resource('http://localhost/capacitameAPI/Miscapacitaciones/:id', {id: "@_id"}, {
            update: {method: "PUT", params: {id: "@_id"}}
        })
    }])
  .controller('PrincipalCtrl', function ($scope, Miscapacitaciones, $route) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    Miscapacitaciones.get(function (data) {
            $scope.miscapacitaciones = data.response;
        })

        

    var vm = this;
    vm.menuTemplate = {
      url: 'views/menu.html'
    };
      $( document ).ready(function(){
        $('.button-collapse').sideNav();
        $('.button-collapse').sideNav('hide');
      $('.dropdown-button').dropdown({ hover: true, constrain_width: true, belowOrigin: true, alignment: 'right' });
      
      });
    $('input.autocomplete').autocomplete({
    data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'http://placehold.it/250x250'
    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });
    $(document).ready(function() {
    $('select').material_select();
  });
    $(document).ready(function(){
      $('.slider').slider();
       // Pause slider
    $('.slider').slider('pause');
// Start slider
$('.slider').slider('start');
// Next slide
$('.slider').slider('next');
// Previous slide
$('.slider').slider('prev');
    });
  });
