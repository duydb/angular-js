"use strict";
angular.module("SkeletonAngularJS")
        .constant("$USER_ROLE", {
            user: "_ur",
            admin: "_ad",
            guest: "_gs"
        })
        .constant("$SESSIONID", {
            tmp: "n80RMQkFoF3tE9v5qAfu5ulxBEKMs"
        })
        .constant("$P_USER", {
            user: "__u",
            sessionId: "__s",
            role: "__r"
        })
        .factory("$USER", function ($USER_ROLE) {
            return {
                user: {
                    username: "user",
                    password: "user",
                    role: $USER_ROLE.user
                },
                admin: {
                    username: "admin",
                    password: "admin",
                    role: $USER_ROLE.admin
                },
                guest: {
                    username: "guest",
                    password: "",
                    role: $USER_ROLE.guest
                }
            };
        })
        .factory("$loginComp", function ($http, $USER_ROLE, $USER, $P_USER, $cookieStore, $SESSIONID) {
            this.checkLogined = function () {
                var user = $cookieStore.get($P_USER.user);
                var sid = $cookieStore.get($P_USER.sessionId);
                var role = $cookieStore.get($P_USER.role);

                return typeof user !== 'undefined'
                        && typeof sid !== 'undefined'
                        && typeof role !== 'undefined';
            };
            this.login = function (username, password, callback) {
                this.checkValid(username, password, function (code, msg, role, sid) {
                    if (code) {
                        $cookieStore.put($P_USER.user, username);
                        $cookieStore.put($P_USER.sessionId, sid);
                        $cookieStore.put($P_USER.role, role);
                    }
                    callback(code, msg);
                });
            };
            this.logout = function (callback) {
                if (this.checkLogined()) {
                    $cookieStore.remove($P_USER.user);
                    $cookieStore.remove($P_USER.sessionId);
                    $cookieStore.remove($P_USER.role);
                    callback(true, "Login Success");
                } else {
                    callback(false, "You have not login yet");
                }
            };
            this.getUserInfo = function () {
                var res = null;
                if (this.checkLogined()) {
                    var user = $cookieStore.get($P_USER.user);
                    var sid = $cookieStore.get($P_USER.sessionId);
                    var role = $cookieStore.get($P_USER.role);
                    res = {
                        username: user,
                        sessionId: sid,
                        role: role
                    };
                }
                return res;
            };
            this.getRole = function () {
                var res = $USER_ROLE.guest;
                if (this.checkLogined()) {
                    res = $cookieStore.get($P_USER.role);
                }
                return res;
            };
            this.checkValid = function (username, password, callback) {
                if (username === $USER.user.username && password === $USER.user.username) {
                    callback(true, "Login success", $USER.user.role, $SESSIONID.tmp);
                } else if (username === $USER.admin.username && password === $USER.admin.username) {
                    callback(true, "Login success", $USER.admin.role, $SESSIONID.tmp);
                } else {
                    callback(false, "Login fail: username or password is not match", $USER.guest.role, null);
                }
            };
            this.checkAuth = function (mustRoles, role) {
                var res = false;
                mustRoles.forEach(function (r) {
                    if (r === role) {
                        res = true;
                        return;
                    }
                });
                return res;
            };
            return this;
        });