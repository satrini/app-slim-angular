angular.module('myDirectives', []).directive('myPanelPhoto', function(){

   // DDO
	let tag = {};

	tag.restric = 'E';

	tag.scope = { tit: '@' };

	tag.transclude = true;

	tag.templateUrl = 'js/directives/html/my-panel-photo.html'; 

	return tag;

})
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
