// Fake Factory Example //
// There should be only one factory per file //

app.factory('playersFactory', function(){
			//Factory should pull data from the database with mongoose //
			var players = [
				{name:'John', team:'Seahawks'},
	            {name:'Jessie', team:'Saints'},
	            {name:'Johanna', team:''},
	            {name:'Joy', team:'Broncos'}];
	        var factory = {};
	        factory.getPlayers = function(callback){
	        	callback(players);
	        };
	        factory.newPlayer = function(data){
	        	players.team = '';
	        	players.push(data);
	        };
	        factory.removePlayer= function(data){
	        	players.splice(data,1);
	        };
	        factory.addPlayerToTeam = function(data){
				players[data.playerIdx].team = data.team;
			};
			factory.removePlayerFromTeam = function(data){
				players[data].team = '';
			};
	        return factory;
		});