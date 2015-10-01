'use strict';

(function(){
    var app = angular.module('movieCatalogApp', ['movieCatalogApp.controllers', 'movieCatalogApp.config']);

    app.config(function(apiUrl) {
        console.log("Api URL: " + apiUrl);
    });
})();