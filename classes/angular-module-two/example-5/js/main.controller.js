(function (angular) { 'use strict'

	angular
		.module("myApp")
		.controller('mainCtrl', ['$scope', function($scope) {

			$scope.name = 'Marcos';
			
		}])

}(angular));