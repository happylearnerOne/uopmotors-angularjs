(function() {
    'use strict';

    angular
        .module('app')
        .factory('contactUsService', contactUsService);

    contactUsService.$inject = ['$http'];

    /* @ngInject */
    function contactUsService($http) {
        console.log("service");
        var service = {
            postEmail: postEmail
        };
        return service;

        ////////////////

        function postEmail(mailData) {
            console.log("s:postEmail");
        	return $http.post("/postEmail/",mailData)
		        .then(sendMailComplete)
		        .catch(sendMailFailed);

		   	function sendMailComplete(results) {
		   		return results;
		   	}

		   	function sendMailFailed(error) {
		   		return error.data;
		   	}
        }
    }
})();