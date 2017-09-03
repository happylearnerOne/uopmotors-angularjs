angular
    .module('app', [
	    'ngAnimate',
	    'ui.bootstrap',
	    'ngRoute',
	    'ngMap'
    ])
    .config(function ($routeProvider) {
    	console.log("in config");
	    $routeProvider.when('/Home', {
	    	controller: 'indexCtrl',
	        templateUrl: 'components/views/home.html'
	    });
	    $routeProvider.when('/AboutUs', {
	    	controller: 'aboutUsCtrl',
	        templateUrl: 'components/views/aboutus.html'
	    });
	    $routeProvider.when('/Products', {
	    	controller: 'productsCtrl',
	        templateUrl: 'components/views/products.html'
	    });
	    $routeProvider.when('/ContactUs', {
	    	controller: 'contactUsCtrl',
	        templateUrl: 'components/views/contactUs.html'
	    });    
	    $routeProvider.when('/HomeTW', {
	    	controller: 'indexTWCtrl',
	        templateUrl: 'components/views/homeTW.html'
	    }); 
	    $routeProvider.when('/AboutUsTW', {
	    	controller: 'aboutUsCtrl',
	        templateUrl: 'components/views/aboutusTW.html'
	    });	
	    $routeProvider.when('/ProductsTW', {
	    	controller: 'productsTWCtrl',
	        templateUrl: 'components/views/productsTW.html'
	    });	  
	    $routeProvider.when('/ContactUsTW', {
	    	controller: 'contactUsCtrl',
	        templateUrl: 'components/views/contactUsTW.html'
	    }); 	          
	    /*  	    	    
	    $routeProvider.when('/indexTW', {
	    	controller: 'indexTWCtrl',
	        templateUrl: 'indexTW.html'
	    });  
*/
	    $routeProvider.otherwise({ redirectTo: '/HomeTW' });
	});
