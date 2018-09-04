const assert = require('assert');

const Player = require('../player.js');
const Card = require('../card.js');

describe('Player', function(){
  let player;
  let card;

  beforeEach(function(){
  player = new Player('Tahnee');
  card = new Card('Superman', 6, 9, 7);
});

it('can add card', function(){
  player.addCard(card);
  const actual = player.cards;
  const expected = [card];
  assert.deepStrictEqual(actual, expected);
});

it('can take card', function(){
  player.addCard(card);
  const actual = player.takeTopCard();
  const expected = (card);
  assert.deepStrictEqual(actual, expected);

})


});
