angular.module('pic').controller('EditPhotoController', function($scope, resourcePhoto, $routeParams){

	$scope.photo = {};
	$scope.msg   = '';

	if ($routeParams.id) {

		resourcePhoto.query({id: $routeParams.id}, function(response){
			$scope.photo = response[0];
		}, function(error){
			console.log(error);
			$scope.msg = 'Não foi possível obter foto';
		});
	}

	$scope.submit = function(photo) {

		if ($scope.forms.$valid) {

			resourcePhoto.update({id: photo.id}, photo, function(response){
				$scope.msg  = 'Foto alterada com sucesso!';
				$scope.$broadcast('photoRegistered');
			}, function(error){
				console.log(error);
				$scope.msg = 'Não foi possível alterar a foto';
			});
		}
	};
});
