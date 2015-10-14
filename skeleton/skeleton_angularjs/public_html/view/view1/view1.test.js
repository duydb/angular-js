"use strict";
describe("Test View 1 Controller", function () {
    var $controller;
    beforeEach(module("SkeletonAngularJS"));
    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));
    describe("view1Controller.refreshTime()", function () {
        it("Refresh Time Test", function () {
            var $scope = {};
            var controller = $controller("view1Controller", {$scope: $scope});
            var tmp = new Date();
            controller.refreshTime();
            expect(controller.curTime).toEqual(tmp);
        });
    });
});