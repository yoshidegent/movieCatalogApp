'use strict';

(function(){
    var app = angular.module('movieCatalogApp', ['movieCatalogApp.controllers']);

    app.config(function(apiUrl) {
        console.log("Api URL: " + apiUrl);
    });
})();