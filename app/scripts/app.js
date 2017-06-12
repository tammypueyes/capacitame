'use strict';

/**
 * @ngdoc overview
 * @name capacitameApp
 * @description
 * # capacitameApp
 *
 * Main module of the application.
 */
angular
  .module('capacitameApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl',
        controllerAs: 'menu'
      })
      .when('/mis_capacitaciones', {
        templateUrl: 'views/mis_capacitaciones.html',
        controller: 'MisCapacitacionesCtrl',
        controllerAs: 'misCapacitaciones'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
