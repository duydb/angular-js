"use strict";
angular.module("SkeletonAngularJS")
        .factory("$weatherComp", function ($raComp, $WEATHER) {
            this.getCurrentWeatherByLocation = function (country, city, callback) {
                var url = $WEATHER.baseUrl + "?q=" + city + "," + country;
                $raComp.get(url,callback);
            };
            return this;
        });