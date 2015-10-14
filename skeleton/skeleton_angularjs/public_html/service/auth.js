"use strict";
angular.module("SkeletonAngularJS")
        .constant("$AUTH_EVENTS", {
            notAuthenticated: "auth-not-authenticated",
            notAuthorized: "auth-not-authorized",
            loginSuccess: "login-success",
            logoutSuccess: "logout-success"
        })
        .run(function ($rootScope, $location, $loginComp, $ROUTING, $AUTH_EVENTS) {
            $rootScope.$on("$routeChangeStart", function (event, next) {
                if (typeof next.$$route !== 'undefined' && typeof next.$$route.redirectTo === 'undefined') {
                    if (!$loginComp.checkLogined()) {
                        $rootScope.$broadcast($AUTH_EVENTS.logoutSuccess);
                    } else if ($location.url() === $ROUTING.login) {
                        $rootScope.$broadcast($AUTH_EVENTS.loginSuccess);
                    } else if (!$loginComp.checkAuth(next.$$route.role, $loginComp.getRole()))
                        $rootScope.$broadcast($AUTH_EVENTS.notAuthorized);
                }
            });
            $rootScope.$on($AUTH_EVENTS.notAuthorized, function (event, next) {
                $location.url($ROUTING.accessDenied);
            });
            $rootScope.$on($AUTH_EVENTS.loginSuccess, function (event, next) {
                $rootScope.ui.user = $loginComp.getUserInfo();
                $location.url($ROUTING.home);
            });
            $rootScope.$on($AUTH_EVENTS.logoutSuccess, function (event, next) {
                $rootScope.ui.user = null;
                $location.url($ROUTING.login);
            });
        });