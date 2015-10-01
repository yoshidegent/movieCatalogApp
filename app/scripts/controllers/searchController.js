'use strict';

(function(){
    angular.module('movieCatalogApp.controllers')
        .controller('searchController', SearchController);

    function SearchController($scope, $http, apiUrl)
    {
        const searchUrlAddition = '/api/Movies/search?title=';

        const pushMovieUrlAddition = '/api/Movies/{id}';

        $scope.movies = [];

        $scope.searchMovies = function()
        {
            $http.get(apiUrl + searchUrlAddition + $scope.searchBox)
                .success(function(response){
                    $scope.movies = response;
                });
        }

        $scope.addMovieToCatalog = function(id)
        {
            var tempUrlAddition = pushMovieUrlAddition.replace("{id}", id);
            $http.post(apiUrl + tempUrlAddition);
        }
    }
})();