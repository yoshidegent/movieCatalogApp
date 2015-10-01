'use strict';

(function(){
    angular.module('movieCatalogApp.controllers')
        .controller('catalogController', CatalogController);

    function CatalogController($scope, $http, apiUrl)
    {
        const catalogMoviesUrlAddition = '/api/Movies';

        $scope.catalogmovies = [];

        $http.get(apiUrl + catalogMoviesUrlAddition)
            .success(function(response){
                $scope.catalogmovies = response;
            });
    }
})();