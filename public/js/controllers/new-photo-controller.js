angular.module('pic').controller('NewPhotoController', function($scope, resourcePhoto){

	$scope.photo = {};
	$scope.msg   = '';

	$scope.submit = function(photo) {

		if ($scope.forms.$valid) {

			resourcePhoto.save(photo, function(){
				$scope.msg = 'Foto cadastrada com sucesso!';
				$scope.$broadcast('photoRegistered');
			}, function(error){
				console.log(error);
				$scope.msg = 'Não foi possível cadastrar a foto';
			});
		}
	};
});
