myAppModule.controller("TeamsController", function($scope, TeamFactory){
    $scope.teams = [];

    TeamFactory.getTeams(function(teams){
        $scope.teams = teams;
    })

    $scope.addTeam = function(){
        TeamFactory.addTeam($scope.newTeam)
        $scope.newTeam = {}; //Reset newTeam form
    }

    $scope.removeTeam = function($index){
        TeamFactory.removeTeam($index);
    }
});
