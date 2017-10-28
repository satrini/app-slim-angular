angular.module('myServices', ['ngResource']).factory('resourcePhoto', function($resource){

	return $resource('api/images/:id', null, {
		update : {
			method: 'PUT'
		}		
	});
});
