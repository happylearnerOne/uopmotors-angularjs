(function() {
    'use strict';

    angular
        .module('app')
        .controller('indexTWCtrl', indexTWCtrl);

    indexTWCtrl.$inject = ['$scope','$log','$timeout','$location', '$rootScope'];
 
    /* @ngInject */
    function indexTWCtrl($scope, $log, $timeout, $location, $rootScope) {

        $rootScope.canSearch = false;
        
        $scope.navItems = [
            {path: '/HomeTW', title: '首頁'},
            {path: '/AboutUsTW', title: '關於UOP'},
            {path: '/ProductsTW', title: '產品'},
            {path: '/ContactUsTW', title: '聯絡我們'}
        ];

        $location.path('/HomeTW');

        $scope.isActive = function(navItem) {
            return navItem.path == $location.path() ? true : false;
        };
        /* slide */

        $scope.myInterval = 4000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides = [];
        var currIndex = 0;
        slides.push({
          image: './styles/image/i1.jpg',
          id: currIndex++
        });
        slides.push({
          image: './styles/image/i2.jpg',
          id: currIndex++
        });
        slides.push({
          image: './styles/image/i3.jpg',
          id: currIndex++
        });
        slides.push({
          image: './styles/image/i4.jpg',
          id: currIndex++
        });
        slides.push({
          image: './styles/image/i5.jpg',
          id: currIndex++
        });


        /* slide end */ 


         $scope.val = 0;
        var timer = setInterval(function(){
               if($scope.val == 5){
                    $scope.val = -1;
                }
                $scope.val = $scope.val + 1;
                switch($scope.val){
                    case 0:
                        $scope.article = "1";
                        break;
                    case 1:
                        $scope.article = "2";
                        break;
                    case 2:
                        $scope.article = "3";
                        break;
                    case 3:
                        $scope.article = "4";
                        break;
                    case 4:
                        $scope.article = "5";
                        break;                        
                    default:
                        $scope.article = "1";
                        break;
                }
                $scope.$apply();
            }, 2000); 

    }

})();