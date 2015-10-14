"use strict";
angular.module("SkeletonAngularJS")
        .constant("$ROUTING", {
            home: "/",
            login: "/login",
            view1: "/view1",
            view2: "/view2",
            notFound: "/error-pages/404",
            accessDenied: "/error-pages/access-denied",
            serverError: "/error-pages/500"
        })
        .config(["$routeProvider", "$USER_ROLE", "$ROUTING", function ($routeProvider, $USER_ROLE, $ROUTING) {
                $routeProvider
                        .when($ROUTING.login, {
                            templateUrl: "view/login/login.html",
                            controller: "loginController",
                            role: [$USER_ROLE.guest]
                        })
                        .when($ROUTING.view1, {
                            templateUrl: "view/view1/view1.html",
                            controller: "view1Controller",
                            role: [$USER_ROLE.user, $USER_ROLE.admin]
                        })
                        .when($ROUTING.view2, {
                            templateUrl: "view/view2/view2.html",
                            controller: "view2Controller",
                            role: [$USER_ROLE.admin]
                        })
                        .when($ROUTING.notFound, {
                            templateUrl: "view/error-pages/404.html",
                            controller: "errorPagesController",
                            role: [$USER_ROLE.guest, $USER_ROLE.user, $USER_ROLE.admin]
                        })
                        .when($ROUTING.serverError, {
                            templateUrl: "view/error-pages/500.html",
                            controller: "errorPagesController",
                            role: [$USER_ROLE.guest, $USER_ROLE.user, $USER_ROLE.admin]
                        })
                        .when($ROUTING.accessDenied, {
                            templateUrl: "view/error-pages/access-denied.html",
                            controller: "errorPagesController",
                            role: [$USER_ROLE.guest, $USER_ROLE.user, $USER_ROLE.admin]
                        })
                        .when($ROUTING.home, {
                            redirectTo: "/view1",
                        })
                        .otherwise({
                            redirectTo: $ROUTING.notFound,
                        });
            }]);