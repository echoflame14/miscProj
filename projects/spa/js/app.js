angular.module("app", ['ui.router']).config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/home");
	$stateProvider
		.state('sleep',{
			url: "/sleep",
			templateUrl:"../views/sleep.html"
		})
		.state('home', {
			url: "/home",
			templateUrl: "../views/home.html"
		})
		.state('relax',{
			url: "/relax",
			templateUrl: "../views/relax.html"
		})
		.state('focus',{
			url: "/focus",
			templateUrl: "../views/focus.html"
		});

});
