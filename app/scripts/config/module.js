(function(){
    angular.module('movieCatalogApp.config', [])
        .constant('apiUrl', 'https://angularbackend.azurewebsites.net:443')
        .value('appTitle', 'Movie Catalog');
})();
