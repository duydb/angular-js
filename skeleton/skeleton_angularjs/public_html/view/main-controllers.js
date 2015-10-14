"use strict";
angular.module("SkeletonAngularJS")
        .controller('SkeletonAngularJS.Controller', function ($scope, $rootScope, $loginComp, $ROUTING, $location, $AUTH_EVENTS) {
            $rootScope.tab = -1;
            this.$ROUTING = $ROUTING;
            $rootScope.ui = {
                user: null
            };
            this.isTab = function (routing) {
                return routing === $location.url();
            };
            if ($loginComp.checkLogined()) {
                $rootScope.ui.user = $loginComp.getUserInfo();
            } else {
                $rootScope.ui.user = null;
            }
        });