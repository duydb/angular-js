"use strict";
angular.module("SkeletonAngularJS")
        .controller("loginController", function ($scope, $rootScope, $loginComp, $AUTH_EVENTS) {
            $scope.loginCtrl = this;
            this.login = new Login();
            function Login() {
                this.username = "";
                this.password = "";
                this.login = function () {
                    $loginComp.login(this.username, this.password, function (code, msg) {
                        console.log(code);
                        console.log(msg);
                        alert(msg);
                        if (code) {
                            $rootScope.$broadcast($AUTH_EVENTS.loginSuccess);
                        }
                    });
                };
                return this;
            }
        })
        .controller("logoutController", function ($scope, $rootScope, $loginComp, $AUTH_EVENTS) {
            this.logout = function () {
                $loginComp.logout(function (code, msg) {
                    alert(msg);
                    if (code) {
                        $rootScope.$broadcast($AUTH_EVENTS.logoutSuccess);
                    }
                });
            };
        });