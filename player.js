const Player = function(name){
this.name = name;
this.cards = [];

}

Player.prototype.addCard = function(card){
this.cards.push(card);
}

Player.prototype.takeTopCard = function(){
  return this.cards.pop();
}


module.exports = Player;
