(function() {
    'use strict';

    angular
        .module('app')
        .controller('aboutUsCtrl', aboutUsCtrl);

    aboutUsCtrl.$inject = ['$scope','$log','$timeout','$location', '$rootScope'];
 
    /* @ngInject */
    function aboutUsCtrl($scope, $log, $timeout, $location, $rootScope) {        
        $rootScope.canSearch = false;    
    }

})();