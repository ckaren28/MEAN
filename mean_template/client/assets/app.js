var app = angular.module('Wall', ['nRoute', 'ngCookies'])
app.config(function($routeProvider){
	.when('/',{
		templateUrl: 'partials/partial1.html',
		controller: 'nameController'
	});
	.when('/',{
		templateUrl: 'partials/partial2.html',
		controller: 'nameController'
	});
	.otherwise({
		redirectTo:'/'
	});
});