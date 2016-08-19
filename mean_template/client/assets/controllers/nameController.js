///// Example Controller-------REPLACE!  /////
////  Only one controller per file   /////

app.controller('associationsController',['$scope', 'teamsFactory', 'playersFactory', function($scope, teamsFactory, playersFactory){
			$scope.players = [];
			$scope.teams = [];
			playersFactory.getPlayers(function(data){
				$scope.players = data
			});
			teamsFactory.getTeams(function(data){
				$scope.teams = data;
			});
			$scope.addPlayerToTeam = function(){
				playersFactory.addPlayerToTeam($scope.newAssoc);
			};
			$scope.removePlayerFromTeam = function($index){
				playersFactory.removePlayerFromTeam($index);
			};
		}]);