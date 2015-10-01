'use strict';

(function () {
    var app = angular.module('movieCatalogApp.controllers', ['movieCatalogApp.config']);

    app.controller('appController', AppController);

    function AppController($scope, appTitle) {
        $scope.title = appTitle;
    }

})();