"use strict";
angular.module("SkeletonAngularJS")
        .constant("$DEV_CONFIG", {
            baseUrl: "http://dev.example.com"
        })
        .constant("$PRO_CONFIG", {
            baseUrl: "http://example.com"
        })
        .constant("$WEATHER", {
            baseUrl: "http://api.openweathermap.org/data/2.5/weather"
        })
        .factory("$CONFIG", function ($DEV_CONFIG, $PRO_CONFIG) {
//            return $PRO_CONFIG;
            return $DEV_CONFIG;
        });