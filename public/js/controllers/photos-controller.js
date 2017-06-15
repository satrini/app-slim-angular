angular.module('pic').controller('PhotosController', function($scope, resourcePhoto){

	$scope.fil = '';
	$scope.photos = [];
	$scope.msg = '';

	resourcePhoto.query(function(photos) {
		$scope.photos = photos;	
	}, function(error){
		console.log(error);
	});

	$scope.drop = function(photo) {

		resourcePhoto.delete({id: photo.id}, 
		function(response){
			let photoId = $scope.photos.indexOf(photo);
			$scope.photos.splice(photoId, 1);
			$scope.msg = 'Imagem removida com sucesso.';
		}, function(error){
			console.log(error);
		});
	};
});
