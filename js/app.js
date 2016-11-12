(function(){
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope){

		$scope.btnClick = function(){
			var dishes = [];
			var count = 0;
			if ($scope.lunchDishes){
				dishes = $scope.lunchDishes.split(',');
			}
			
			for (var i = 0; i < dishes.length; i++){
				if (dishes[i]){
					count++;
				}
			}

			if (count == 0){
				$scope.message = 'Please enter data first';
			}
			else if (count <= 3) {
				$scope.message = 'Enjoy!';
			}
			else{
				$scope.message = 'Too much!';
			}
		};

	}

})();
