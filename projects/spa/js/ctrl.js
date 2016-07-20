angular.module("app").controller("ctrl",function($scope,srvc){
	$scope.test = "working";
	$scope.leftHz = 100;
	$scope.rightHz = 105;
	$scope.currentHz = $scope.rightHz - $scope.leftHz;
	$scope.calcDiff = function(){
		if($scope.rightHz > $scope.leftHz){
			$scope.currentHz = $scope.rightHz - $scope.leftHz;
		}
		else{
			$scope.currentHz = $scope.leftHz - $scope.rightHz;
		}
	};
	$scope.rightUp = function(){
		$scope.rightHz++;
		$scope.calcDiff();
	};
	$scope.rightDown = function(){
		$scope.rightHz--;
		$scope.calcDiff();
	};
	$scope.leftUp = function(){
		$scope.leftHz++;
		$scope.calcDiff();
	};
	$scope.leftDown = function(){
		$scope.leftHz--;
		$scope.calcDiff();
	};
	$scope.sleepMode = function(){
		$scope.rightHz = 100;
		$scope.leftHz = 97;
		$scope.calcDiff();
	};
	$scope.relaxMode = function(){
		$scope.rightHz = 103;
		$scope.leftHz = 96;
		$scope.calcDiff();
	};
	$scope.focusMode = function(){
		$scope.rightHz = 110;
		$scope.leftHz = 92;
		$scope.calcDiff();
	};
});
