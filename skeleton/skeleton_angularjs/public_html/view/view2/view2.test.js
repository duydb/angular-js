"use strict";
describe("Test View 2 Controller", function () {
    var $controller;
    beforeEach(module("SkeletonAngularJS"));
    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));
    describe("view2Controller.hello", function () {
        it("Say Hello Test", function () {
            var $scope = {};
            var controller = $controller("view2Controller", {$scope: $scope});
            expect(controller.sayHello("demo")).toEqual("Hello demo");
        });
    });
});