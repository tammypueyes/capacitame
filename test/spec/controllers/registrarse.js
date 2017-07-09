'use strict';

describe('Controller: RegistrarseCtrl', function () {

  // load the controller's module
  beforeEach(module('capacitameApp'));

  var RegistrarseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegistrarseCtrl = $controller('RegistrarseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RegistrarseCtrl.awesomeThings.length).toBe(3);
  });
});
