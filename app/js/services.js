'use strict';

var mediaService = angular.module('myApp.services', ['ngResource']);

mediaService.factory('Media', function($resource) {
    return $resource("http://localhost:8080/Media-1-Service/resources/media", 
    {}, {
        query: {method: 'GET', isArray: true}
    });
   
});

mediaService.factory('Image', function($resource) {
   return $resource("http://localhost:8080/Media-1-Service/resources/media/stream/1c273c2e-77b5-4ab4-a6f6-3d8ebbd72fd3",
            {},{
         fetch: {method: 'GET' }

    });
   
});
//http://www.masnun.com/2013/08/28/rest-access-in-angularjs-using-ngresource.html

