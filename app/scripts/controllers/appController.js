'use strict';

(function () {
    var app = angular.module('movieCatalogApp.controllers', ['movieCatalogApp.config', 'ngRoute']);

    app.controller('appController', AppController);

    function AppController($scope, appTitle) {
        this.title = appTitle;
    }

})();