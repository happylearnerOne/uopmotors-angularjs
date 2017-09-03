(function() {
    'use strict';

    angular
        .module('app')
        .factory('productsService', productsService);

    productsService.$inject = ['$http'];

    /* @ngInject */
    function productsService($http) {
        var service = {
            getProducts: getProducts
        };
        return service;

        ////////////////

        function getProducts() {
        	return $http.get('./data/products.json')
		        .then(getProductsComplete)
		        .catch(getProductsFailed);

		   	function getProductsComplete(results) {
		   		return results.data;
		   	}

		   	function getProductsFailed(error) {
		   		return error.data;
		   	}
        }
    }
})();