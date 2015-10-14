"use strict";
angular.module("SkeletonAngularJS")
        .controller("view1Controller", function ($scope, $weatherComp, $rootScope) {
            $rootScope.tab = 'view1';
            console.log("view 1");
            $scope.view1Ctrl = this;
            this.curTime = new Date();
            this.weather = {
                country: "vn",
                city: "Ho Chi Minh",
                data: null
            };
            this.refreshTime = function () {
                this.curTime = new Date();
            };
            this.getCurrentWeather = function (country, city) {
                var ctrl = this;
                $weatherComp.getCurrentWeatherByLocation(country, city, function (data) {
                    ctrl.weather.data = angular.toJson(data, true);
                });
            };
            this.getCurrentWeather(this.weather.country, this.weather.city);
        });