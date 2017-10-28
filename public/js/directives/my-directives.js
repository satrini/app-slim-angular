angular.module('myDirectives', [])

.directive('myFocus', function(){
	
	// DDO
	let ddo = {};

	ddo.restric = 'A';

	ddo.link = function(scope, element) {

		scope.$on('photoRegistered', function(){
			element[0].focus();		
		});
	};

	return ddo;
});
