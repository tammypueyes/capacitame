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
      .when('/miscapacitaciones', {
        templateUrl: 'views/miscapacitaciones.html',
        controller: 'MisCapacitacionesCtrl',
        controllerAs: 'misCapacitaciones'
      })
      .when('/menu_sinlogin', {
        templateUrl: 'views/menu_sinlogin.html',
        controller: 'MenuSinloginCtrl',
        controllerAs: 'menuSinlogin'
      })
      .when('/usuariologueado', {
        templateUrl: 'views/usuariologueado.html',
        controller: 'UsuarioLogueadoCtrl',
        controllerAs: 'usuarioLogueado'
      })
      .when('/capacitaciones', {
        templateUrl: 'views/capacitaciones.html',
        controller: 'CapacitacionesCtrl',
        controllerAs: 'capacitaciones'
      })
      .when('/vercapacitacion', {
        templateUrl: 'views/vercapacitacion.html',
        controller: 'VercapacitacionCtrl',
        controllerAs: 'verCapacitacion'
      })
      .when('/principal', {
        templateUrl: 'views/principal.html',
        controller: 'PrincipalCtrl',
        controllerAs: 'principal'
      })
      .when('/micapacitacion', {
        templateUrl: 'views/micapacitacion.html',
        controller: 'MicapacitacionCtrl',
        controllerAs: 'micapacitacion'
      })
      .when('/comprar', {
        templateUrl: 'views/comprar.html',
        controller: 'ComprarCtrl',
        controllerAs: 'comprar'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/sercapacitador', {
        templateUrl: 'views/sercapacitador.html',
        controller: 'SercapacitadorCtrl',
        controllerAs: 'sercapacitador'
      })
      .when('/registrarse', {
        templateUrl: 'views/registrarse.html',
        controller: 'RegistrarseCtrl',
        controllerAs: 'registrarse'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
