define(['angular', 'module2'], function(angular, module2) {
	//angular dependent module
	//create a piece of code for your angular app, with angular deps	
	
	var ngModule3=angular.module('module3',['module2']);
	
	ngModule3.controller('module3Controller', function($scope) {
		$scope.message = 'Im the module 3 page.'
	});
	
	
	var privateUtilityMethod3 = function(param){
		console.log('executing privateUtilityMethod3');
	}
	
	
	//define facade interface modules
	var module3 = {};	
	
		
	module3.ngModule3 = ngModule3;
	console.log("Exporting module3: "+module3);
	return module3;
});