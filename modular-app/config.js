require.config({	
	paths: {
		'angular': 'public/components/angular/angular',
		'angular-route': 'public/components/angular-route/angular-route',
		'angular-animate': 'public/components/angular-animate/angular-animate',
		'angular-loader': 'public/components/angular-loader/angular-loader',
		'angular-mocks': 'public/components/angular-mocks/angular-mocks',
		'domReady': 'public/components/domReady/domReady',
		ExtImport: 'app/mainModule/ExtImport',
		NgAppImport: 'app/mainModule/NgAppImport',
		module1: 'app/module1/Module1',
		module2: 'app/module2/Module2',
		module3: 'app/module3/Module3',
		AngularApp: 'app/mainModule/AngularApp'			
	},
	shim: {
		angular: {
			exports: 'angular'
		},
		'angular-animate': {
			deps: [
				'angular'
			]
		},
		'angular-route': {
			deps: [
				'angular'
			]
		},
		AngularApp: {
			deps: [
				'angular',
				'angular-animate',
				'angular-route',
				'ExtImport',
				'NgAppImport',
				'module1',
				'module2',
				'module3'
			]
		}
	},
	packages: [
	   {
		   name: 'module4',
		   location: 'module4'
	   }
	]
});

//require our angularApp for bootstrapping it when DOM ready function was called! 
require(
		[ 'angular', 'AngularApp', 'domReady' ],
		function(angular, app, domReady) {
			'use strict';
			domReady(function() {
				console
						.info('The DOM is ready this is the right time to bootstrap the app');
				angular.bootstrap(document, [ 'MainModule' ])
			});
			console.log("Application loaded.... " + app);
		});