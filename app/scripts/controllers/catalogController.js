'use strict';

(function(){
    angular.module('movieCatalogApp.controllers')
        .controller('catalogController', CatalogController);

    function CatalogController($scope, $http, apiUrl)
    {

        $scope.movies = [];
    }
})();