"use strict";
angular.module("SkeletonAngularJS")
        .controller("view2Controller", function ($scope, $rootScope) {
            $rootScope.tab = 'view2';
            console.log("view 2");
            $scope.view2Ctrl = this;
            this.name = '';
            this.sayHello = function (name) {
                return "Hello " + name;
            };
            this.hello = function (name) {
                alert(this.sayHello(name));
            };
        });