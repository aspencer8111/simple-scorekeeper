var app = angular.module('scoreTracker', [])

.controller('PlayersController', [function(){
  this.players = [];

  this.addPlayer = function(name, link){
    if(!this.name || this.name === ''){ return; };
    this.players.push({name: name, points: 0});
    this.name = '';
  };

  this.incrementPoints = function(player){
    player.points += 1;
  };

  this.decrementPoints = function(player){
    player.points -= 1;
  };
}])