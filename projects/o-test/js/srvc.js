angular.module("app").service("srvc", function(){
	this.upFunc = function(x){
		x = x + 1;
		console.log("upFunc in service running");
		return x;
	};
});
