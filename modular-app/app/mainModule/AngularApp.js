define(['angular','NgAppImport','ExtImport'], function(angular,ngDeps,mainDeps) {
	//add some other angular dependencies
	ngDeps.push('ngRoute');
	ngDeps.push('ngAnimate');
	
	console.log("Main ng: "+angular);
	console.log("Main ngDeps: "+ngDeps);
	console.log("Main mainDeps: "+mainDeps);
	
	
	
	//register main angular module with it's dependencies	
	var app = angular.module('MainModule', ngDeps);	
	require(mainDeps, function(d){
		app.mainDeps = d;		
	});
	
	//define the main controller
	app.controller('mainController', function($scope){
		$scope.message= 'Im the main page pls add me link to other routes to discover what modules this app can provides: '+ngDeps
	});
	
	
	//config our routing
	app.config(function($routeProvider){
		$routeProvider
		
		//route for home
		.when('/', {
			templateUrl: 'views/module1.html',
			controller: 'mainController'
		})
		//route for page1
		.when('/module1', {
			templateUrl: 'views/module1.html',
			controller: 'mainController'
		})			
		//route for page2
		.when('/module2', {
			templateUrl: 'views/module2.html',
			controller: 'module2Controller'
		})
		//route for page3
		.when('/module3', {
			templateUrl: 'views/module3.html',
			controller: 'module3Controller'
		})
	});
	
//	app.controller('module2Controller', function($scope) {
//		$scope.message = 'Im the module 2 page.'
//	});
	
	return app;	
});