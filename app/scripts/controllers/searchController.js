(function(){
    angular.module('movieCatalogApp.controllers', [])
        .controller('searchController', SearchController);

    function SearchController($scope)
    {
        $scope.searchMovies = function(searchBox)
        {
            $scope.movies = $http.get('https://angularbackend.azurewebsites.net/swagger/ui/index#!/Movies/Movies_GetSearchMovie/api/Movies/search', searchBox);
        }
    }
})();