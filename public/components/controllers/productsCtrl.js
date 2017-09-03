(function() {
    'use strict';

    angular
        .module('app')
        .controller('productsCtrl', productsCtrl);

    productsCtrl.$inject = ['$scope','$filter','$log','productsService', '$location', '$rootScope'];

    /* @ngInject */
    function productsCtrl($scope,$filter,$log,productsService, $location, $rootScope) {

        $scope.prodSearch = function(){
        	getProducts().then(function(data) {
	        	$scope.origProducts = data;
	            // angular.forEach( $scope.origProducts, function( item ) {
	                
	            // });

	            $rootScope.products = $filter('filter')($scope.origProducts,$scope.search, false);	            
	        });       	
        }
      
		$scope.initialize = function() {
			$rootScope.canSearch = true;					
			$rootScope.productName = null;
			$rootScope.items = [];
			$rootScope.productImageUrl = null;
			$rootScope.dimensionalChartUrl = null;
			$rootScope.products = {};
			//$rootScope.catalogName = "Plastic-Cover";
			$rootScope.catalogName = "Best-Seller";
	        getProducts().then(function(data) {
	        	$scope.origProducts = data;
	           	//$rootScope.products = $filter('filter')($scope.origProducts,{catalog:$rootScope.catalogName}, false);	           	
	           	$rootScope.products = $filter('filter')($scope.origProducts,{bestSellerUS:"Y"}, false);
	           	$rootScope.selectedRow = 0;
	           	getFirstProductItem($rootScope.products);
	           	/*
	           	$scope.productName = $rootScope.products[0].name;
	           	$scope.items = $rootScope.products[0].items;
				$scope.productImageUrl = $rootScope.products[0].productImageUrl;
				$scope.dimensionalChartUrl = $rootScope.products[0].dimensionalChartUrl;
				$scope.productRelativeImageUrl = $rootScope.products[0].productRelativeImageUrl;
				$scope.imageDirectory = $rootScope.products[0].imageDirectory;
				*/
	        }); 
		};

		$scope.selectProduct = selectProduct;
		$scope.doChangeCatalog = doChangeCatalog;
		$scope.doChangeImage = doChangeImage;

		function getProducts() {
	        return productsService.getProducts()
	        .then(function(data) {
	            return data; 
	        });			
		}

        function selectProduct(index,id) {
        	$log.log('index:' + index);
        	$rootScope.selectedRow = index;
        	var prod = $filter('filter')($rootScope.products,{id:id}, true)[0];
        	getFirstProductItem(prod);
        	/*
			$scope.productName = prod.name;
			$scope.items = prod.items;
			$scope.productImageUrl = prod.productImageUrl;
			$scope.dimensionalChartUrl = prod.dimensionalChartUrl;
			$scope.productRelativeImageUrl = prod.productRelativeImageUrl;
			$scope.imageDirectory = prod.imageDirectory;
			*/		
        }

        function getFirstProductItem(products){  
        	var prod = null;    
        	if(isArray(products) == false){
        		prod = products;        	
        	} else if(isArray(products) == true && products.length > 0){
        		prod = products[0];
        	}
        	if(prod != null){
				$rootScope.productName = prod.name;
				$rootScope.items = prod.items;
				$rootScope.productImageUrl = prod.productImageUrl;
				$rootScope.dimensionalChartUrl = prod.dimensionalChartUrl;
				$rootScope.productRelativeImageUrl = prod.productRelativeImageUrl;
				$rootScope.imageDirectory = prod.imageDirectory; 
				$rootScope.bestSellerUS = prod.bestSellerUS; 
        	} else {
				$rootScope.productName = null;
				$rootScope.items = null;
				$rootScope.productImageUrl = null;
				$rootScope.dimensionalChartUrl = null;
				$rootScope.productRelativeImageUrl = null;
				$rootScope.imageDirectory = null;        		
				$rootScope.bestSellerUS = null;
        	}
    	
        }

        function doChangeImage(url){
        	$rootScope.productImageUrl = url;
        }

        function doChangeCatalog(name){
        	$rootScope.catalogName = name;        	
        	if(name == 'Search'){
        		$scope.isSearch = true;
	        	getProducts().then(function(data) {
		        	$scope.origProducts = data;
		        }).then(function(){
		            $rootScope.products = $filter('filter')($scope.origProducts,$scope.search, false);	    
					$rootScope.selectedRow = 0;           	
	           		getFirstProductItem($rootScope.products);	           		
		        });

        	} else {
        		$scope.isSearch = false;
	        	$rootScope.catalogName = name;
	        	if($rootScope.catalogName == 'Best-Seller'){
	        		$rootScope.products = $filter('filter')($scope.origProducts,{bestSellerUS:"Y"}, false);
	        	}
	        	else {
	        		$rootScope.products = $filter('filter')($scope.origProducts,{catalog:name}, false);	
	        	}
				$rootScope.selectedRow = 0;           		           	
	           	getFirstProductItem($rootScope.products);       	
	           	/*
	           	$scope.productName = $rootScope.products[0].name;
	           	$scope.items = $rootScope.products[0].items;
				$scope.productImageUrl = $rootScope.products[0].productImageUrl;
				$scope.dimensionalChartUrl = $rootScope.products[0].dimensionalChartUrl;    
				$scope.productRelativeImageUrl = $rootScope.products[0].productRelativeImageUrl;    
				$scope.imageDirectory = $rootScope.products[0].imageDirectory;	
				*/        		
        	}
				

        }  

	    function isArray(obj) {	    	
	        if (Object.prototype.toString.call(obj) === '[object Array]') {
	            //var array = [].concat(data); //Ë≥áÊ??ûÂÇ≥?ãÊ?ËΩâÁÇ∫array?çÂèØ‰ª•Áî®length
	            return true
	        } else {
	            //return objectLength(obj);
	            return false;
	        }
	    }              
    }
})();