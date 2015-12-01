define([ 'angular',//
         
], function(angular) {
	
	// angular dependent module
	// create a piece of code for your angular app, with angular deps
	var ngModule2 = angular.module('module2', []);

	// defining module 2 angular controller
	// define the module2Controller controller
	

	ngModule2.controller('module2Controller', function($scope) {
		$scope.module2Message = 'Im the module 2 page.'
	});
	//ngModule2.controller('module2Controller', md2Ctrl);

	var privateUtilityMethod1 = function(param) {
		console.log('executing privateUtilityMethod');
	}

	// define facade interface modules
	var module2 = {};
	module2.utility = {};

	module2.utility.utilityMethod1 = privateUtilityMethod1;
	module2.ngModule2 = ngModule2;

	console.log("Exporting module2: " + module2);
	return module2;
});