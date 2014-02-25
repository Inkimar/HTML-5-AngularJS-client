'use strict';

/* Controllers */

// Customers matches our factory in the services.js
angular.module('myApp.controllers', []).
        controller('MyCtrl1', function($scope, Media,Image) {
            $scope.allMedia = Media.query();
//            $scope.showImage = Image.fetch('1c273c2e-77b5-4ab4-a6f6-3d8ebbd72fd3');
            $scope.showImage = Image.fetch();
           
            $scope.showSelectedElement = function(c) {
                $scope.selected = c;
            };
            
            $scope.fetchImageTest = function() {
                var restUrl = "http://localhost:8080/Media-1-Service/resources/media/stream/e4a3cf7d-add4-4949-a6ce-0f5594e61970";
                
                return restful.toString()
            };

        })
        .controller('MyCtrl2', [function() {
            }]);