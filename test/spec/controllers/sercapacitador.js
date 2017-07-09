'use strict';

describe('Controller: SercapacitadorCtrl', function () {

  // load the controller's module
  beforeEach(module('capacitameApp'));

  var SercapacitadorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SercapacitadorCtrl = $controller('SercapacitadorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SercapacitadorCtrl.awesomeThings.length).toBe(3);
  });
});
