'use strict';

(function(){
    angular.module('movieCatalogApp.controllers')
        .config(function($routeProvider) {
           console.log('test');

            console.log('test');

            $routeProvider.when('/search', {
                templateUrl: 'views/search.html',
                controller: 'searchController'
            });
            $routeProvider.when('/mycatalog', {
                templateUrl: 'views/mycatalog.html',
                controller: 'catalogController'
            });
            $routeProvider.otherwise({
                redirectTo: '/mycatalog'
            });
        });

})();

