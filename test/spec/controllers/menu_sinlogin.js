'use strict';

describe('Controller: MenuSinloginCtrl', function () {

  // load the controller's module
  beforeEach(module('capacitameApp'));

  var MenuSinloginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenuSinloginCtrl = $controller('MenuSinloginCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MenuSinloginCtrl.awesomeThings.length).toBe(3);
  });
});
