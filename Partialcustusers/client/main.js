var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider){ $routeProvider
    .when("/users", {
    templateUrl: "static/partials/users.html"
    })
    .when("/list", {
    templateUrl: "static/partials/list.html"
    })
    .otherwise({
    redirectTo: "/users"
    });
    })

app.factory("userFactory",[function(){
var factory = {};

var users = [
{firstName: "Karl", lastName: "Bemo", language: "Javascript"},
{firstName: "Erin", lastName: "Smith", language: "Python"},
{firstName: "Kyle", lastName: "Lochte", language: "Ruby"}
];


    factory.index = function(callback){
    callback(users);
    }

    factory.create = function(user){
    users.push(user);
    }

    factory.delete = function($index){
    users.splice($index, 1);
    }
    return factory;
    }])


app.controller("CustomizeUsersController", ['$scope', 'userFactory', function($scope, userFactory){ function setUsers(data){
    $scope.users = data;
    $scope.newUser = {};}

    $scope.users = [];

    userFactory.index(setUsers);

    $scope.create = function(){
    userFactory.create($scope.newUser)
    $scope.newUser = {};
    }

    $scope.delete = function($index){
    userFactory.delete($index);
    }
    }])

app.controller("UserListsController",['$scope', 'userFactory', function($scope, userFactory){ function setUsers(data){
    $scope.users = data;
    }

    $scope.users = [];

    userFactory.index(setUsers);
    }])
