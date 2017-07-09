'use strict';

describe('Controller: VercapacitacionCtrl', function () {

  // load the controller's module
  beforeEach(module('capacitameApp'));

  var VercapacitacionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VercapacitacionCtrl = $controller('VercapacitacionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VercapacitacionCtrl.awesomeThings.length).toBe(3);
  });
});
