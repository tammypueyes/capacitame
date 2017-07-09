'use strict';

describe('Controller: MisCapacitacionesCtrl', function () {

  // load the controller's module
  beforeEach(module('capacitameApp'));

  var MisCapacitacionesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MisCapacitacionesCtrl = $controller('MisCapacitacionesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MisCapacitacionesCtrl.awesomeThings.length).toBe(3);
  });
});
