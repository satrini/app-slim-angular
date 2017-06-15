angular.module('pic', ['myDirectives', 'ngRoute', 'myServices']).config(function($routeProvider){

	$routeProvider.otherwise({ redirectTo: '/photos' });

	$routeProvider.when('/photos', {
		templateUrl: 'partials/home.html',
		controller: 'PhotosController',
	});

	$routeProvider.when('/photos/new', {
		templateUrl: 'partials/new.html',
		controller: 'NewPhotoController',
	});

	$routeProvider.when('/photos/edit/:id', {
		templateUrl: 'partials/edit.html',
		controller: 'EditPhotoController',
	});

});
