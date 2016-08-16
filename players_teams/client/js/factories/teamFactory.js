myAppModule.factory("TeamFactory", function(){
    var factory = {};

    var teams = [
        {name:"Red"},
        {name:"Green"},
        {name:"Blue"}
    ];

    factory.getTeams = function(callback){
        callback(teams);
    }
    factory.addTeam = function(team){
        teams.push(team);
    }
    factory.removeTeam = function($index){
        teams.splice(teams.indexOf($index), 1);
    }
    return factory;
});
