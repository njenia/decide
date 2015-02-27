'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngMaterial'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', '$mdDialog', function ($scope, $mdDialog) {
        $scope.pros = ['asdf'];
        $scope.cons = ['fdsad'];

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
        };

        $scope.addCon = function () {

        }

    }]);