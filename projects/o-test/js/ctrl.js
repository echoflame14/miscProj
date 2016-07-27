angular.module("app").controller("ctrl",function($scope, srvc){
	$scope.f2 = 300;
	$scope.f1 = 303;
	$scope.upFunc = function(x){
		console.log("running upFunc");
		++x;
		console.log(x);
		$scope.f1 = x;
		return x;
	};
	$scope.downFunc = function(x){
		console.log("running downFunc");
		--x;
		console.log(x);
		$scope.f1 = x;
		return x;
	}
});
