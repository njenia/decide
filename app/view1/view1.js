'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngMaterial'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', '$mdDialog', '$timeout', function ($scope, $mdDialog, $timeout) {
        $scope.pros = ['asdf fasdfaf awef wfawefawdfwef awefa wfadsfwaef awef'];
        $scope.cons = ['fdsad afwfawdfwa fawefawdfadwfawfwawdfawdf  fwfaw ffawfawefwa'];
        var textFocusDelay = 700;
        $scope.addPro = function ($event) {
            $mdDialog
                .show({
                    templateUrl: 'view1/textDialog.html',
                    controller: function ($scope, $mdDialog) {
                        $scope.ok = function () {
                            $mdDialog.hide($scope.text);
                        };
                        $scope.cancel = function () {
                            $mdDialog.hide();
                        }
                    },
                    targetEvent: $event
                })
                .then(function (text) {
                    $scope.pros.push(text);
                });

            $timeout(function () {
                $('#text').focus();
            }, textFocusDelay);
        };

        $scope.addCon = function ($event) {
            $mdDialog
                .show({
                    templateUrl: 'view1/textDialog.html',
                    controller: function ($scope, $mdDialog) {
                        $scope.ok = function () {
                            $mdDialog.hide($scope.text);
                        };
                        $scope.cancel = function () {
                            $mdDialog.hide();
                        }
                    },
                    targetEvent: $event
                })
                .then(function (text) {
                    $scope.cons.push(text);
                });

            $timeout(function () {
                $('#text').focus();
            }, textFocusDelay);
        };


    }]);