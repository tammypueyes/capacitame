'use strict';

describe('Controller: CapacitacionesCtrl', function () {

  // load the controller's module
  beforeEach(module('capacitameApp'));

  var CapacitacionesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CapacitacionesCtrl = $controller('CapacitacionesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CapacitacionesCtrl.awesomeThings.length).toBe(3);
  });
});
