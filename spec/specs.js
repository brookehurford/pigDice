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
    expect(player1.curScore).to.equal(4);
    expect(player1.totalScore).to.equal(55);
  });
  it('will create player2(two) with 3 objects', function(){
    var player2 = new Player("Tim", 6, 7);
    expect(player2.name).to.equal("Tim");
    expect(player2.curScore).to.equal(6);
    expect(player2.totalScore).to.equal(7);
  });
});
