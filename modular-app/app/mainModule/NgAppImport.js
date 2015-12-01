var ngImports = ['module2','module3'];

define(ngImports, function(module2,module3){
	console.log("NgImport module: "+module2, module3);
//	var ngDeps = [];
//	ngDeps.push('module2');
//	ngDeps.push('module3');	
	return ngImports;
});