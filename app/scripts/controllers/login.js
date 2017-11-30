'use strict';

/**
 * @ngdoc function
 * @name capacitameApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the capacitameApp
 */
angular.module('capacitameApp')
  .controller('LoginCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.insertdata=function(){
    console.log("triggered");
 $http.post("login.php",{'theusername':$scope.user, 'thepassword':$scope.pswd})
.then(function(data) {
        var mssg = data.MESSAGE;
        console.log(data);
        console.log(data.response);     
        if(data.data==="correct"){
          console.log("hola estas logeado");
          window.location.href = 'http://localhost/#!/principal';
        } else {
          $scope.errorMsg = "Usuario o contraseña incorrectos";
        }
      })
      // .finally(function(data, status, headers, config) {
      //   $scope.errorMsg = 'Unable to LOGIN';
      //   console.log("no estas logeado");
      // })
     
     
    }
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