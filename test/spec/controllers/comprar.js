'use strict';

describe('Controller: ComprarCtrl', function () {

  // load the controller's module
  beforeEach(module('capacitameApp'));

  var ComprarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComprarCtrl = $controller('ComprarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ComprarCtrl.awesomeThings.length).toBe(3);
  });
});
