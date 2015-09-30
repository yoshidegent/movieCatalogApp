'use strict';

(function(){
    angular.module('movieCatalogApp.controllers')
        .controller('searchController', SearchController);

    function SearchController($scope, $http)
    {
        $scope.searchBox = '';
        $scope.movies = [];

        $scope.searchMovies = function(searchBox)
        {
            $http.get('https://angularbackend.azurewebsites.net/swagger/ui/index#!/Movies/Movies_GetSearchMovie/api/Movies/search', searchBox)
                .success(function(response){
                    $scope.movies = response;
                });
        }
    }
})();