const Game = function(player1, player2){
  this.player1 = player1;
  this.player2 = player2;
  const card1 = new Card('Superman', 6, 9, 7);
  const card2 = new Card('Scarket Witch', 7, 10, 5);
  const card3 = new Card('Black Widow', 8, 6, 9);
  const card4 = new Card('The Flash', 7, 4, 10);
  const card5 = new Card('Wonder Women',  8, 7, 5);
  const card6 = new Card('Batman', 10, 5, 6);

  this.deck = [card1, card2, card3, card4, card5, card6];
}

Game.prototype.dealCards = function(){
  for(let counter = 0; counter < this.deck.length; counter++){
 if(counter % 2 === 0){
   this.player1.addCard(this.deck[counter]);
 }
 else{
   this.player2.addCard(this.deck[counter]);
 }
}
}
