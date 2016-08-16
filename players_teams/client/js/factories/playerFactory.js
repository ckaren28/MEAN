var myAppModule = angular.module("myApp", ["ngRoute"]);

myAppModule.factory("playerFactory",function(){
    var factory = {};

    var players = [
        {name: "Karl", team: "Red"},
        {name: "Erin", team: "Blue"},
        {name: "Kyle", team: ""}
    ];

    factory.getPlayers = function(callback){
        callback(players);
    }
    factory.addPlayer = function(player){
        player.team = "";
        players.push(player);
    }
    factory.removePlayer = function($index){
        players.splice($index, 1);
    }
    factory.addPlayerToTeam = function(data){
        players[data.playerIdx].team = data.team;
    }
    factory.removePlayerFromTeam = function($index){
        players[$index].team = "";
    }
    return factory;
});
