'use strict';

/**
 * @ngdoc function
 * @name capacitameApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the capacitameApp
 */
angular.module('capacitameApp')
  .controller('MainCtrl', function () {
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
    $('nav a').click(function(e){       
    e.preventDefault();   //evitar el eventos del enlace normal
    var strAncla=$(this).attr('quienessomos'); //id del ancla
      $('body,html').stop(true,true).animate({        
        scrollTop: $(strAncla).offset().top
      },1000);
    
  });
  });
