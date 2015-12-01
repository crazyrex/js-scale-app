define([], function() {
	//define module1 objects and functions
	//no deps 
	//it is an indipendent module
	var module1 = {};
	
	var method1 = function(a){
		console.log('executing method1: '+a);
	}
	
	
	
	module1.method1 = method1;
	console.log("Exporting module1: "+module1);
	return module1;
});