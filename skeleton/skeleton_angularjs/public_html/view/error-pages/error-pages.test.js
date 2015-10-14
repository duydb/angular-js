"use strict";
describe("Test Error Pages Controller", function () {
    var $controller;
    beforeEach(module("SkeletonAngularJS"));
    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));
    describe("errorPagesController.goBack()", function () {
        it("Go back when Not Login", function () {
            var $scope = {};
            var controller = $controller("errorPagesController", {$scope: $scope});
            expect(controller.goBack(false)).toEqual("/login");
        });
        it("Go back when Logined", function () {
            var $scope = {};
            var controller = $controller("errorPagesController", {$scope: $scope});
            expect(controller.goBack(true)).toEqual("/");
        });
    });
});