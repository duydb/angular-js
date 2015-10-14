"use strict";
angular.module("RequestAPIComp",[])
        .factory("$raComp", function ($http) {
            this.get = function (url, callback) {
                $http.get(url)
                        .success(function (data) {
                            callback(data);
                        })
                        .error(function () {
                            callback(null);
                        });
            };
            this.post = function (url, obj, callback) {
                $http.post(url, obj)
                        .success(function (data) {
                            callback(data);
                        })
                        .error(function () {
                            callback(null);
                        });
            };
            return this;
        });