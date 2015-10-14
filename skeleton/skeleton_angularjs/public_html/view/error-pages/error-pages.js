"use strict";
angular.module("SkeletonAngularJS")
        .controller("errorPagesController", function ($rootScope, $scope, $ROUTING) {
            $rootScope.tab = "error-pages";
            console.log("error page");
            $scope.errCtrl = this;
            this.goBack = function (logined) {
                if (logined)
                    return $ROUTING.home;
//                    $rootScope.$broadcast($AUTH_EVENTS.loginSuccess);
                else
                    return $ROUTING.login;
//                    $rootScope.$broadcast($AUTH_EVENTS.logoutSuccess);
//                    $rootScope.$broadcast($AUTH_EVENTS.logoutSuccess);
            };
        });