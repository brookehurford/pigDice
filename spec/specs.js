// Spec

describe("pigDice", function() {
  it('will give you a point total based on a random number from the dice function', function() {
    expect(pigDice(1)).to.equal(1);
  });
});

describe('Player Objects', function(){
  it('will create player1(one) with 3 objects', function(){
    var player1 = new Player("Brooke", 4, 55);
    expect(player1.name).to.equal("Brooke");
    expect(player.curScore).to.equal(4);
    expect(player.totalScore).to.equal(55);
  });
});
