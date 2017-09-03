(function() {
    'use strict';

    angular
        .module('app')
        .controller('contactUsCtrl', contactUsCtrl);

    contactUsCtrl.$inject = ['$scope','$log','contactUsService', '$rootScope'];

    /* @ngInject */
    function contactUsCtrl($scope,$log,contactUsService, $rootScope) {
        // var vm = this;
        // vm.title = 'Controller';
        // activate();
        ////////////////
		$scope.initialize = function() {
			$rootScope.canSearch = false;
			$scope.message = {
				name: '',
				mailto: '',
				subject: '',
				content : ''
			};
		};

		$scope.sendMail = sendMail;

		function sendMail() {
			console.log("sendMail");
			return contactUsService.postEmail($scope.message)
			.then(function(data) {				
				$log.log(data);
				$scope.initialize();
				toastr.options.closeButton = 'false';
	        	toastr.options.positionClass = 'toast-bottom-right';	        	 
	            toastr["success"]("Mail Sending Successfully!", "Success!");
			});
		}
    }
})();