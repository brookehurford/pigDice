
// Example Spec below:

// describe('functionname', function(){
//   it('first spec here...', function(){
//     expect(functionname(parameter)).to.equal('placeholder');
//   });
// });

describe("pigDice", function() {
  it('will give you a point total based on a random number from the dice function', function() {
    expect(pigDice(1)).to.equal(1);
  });
});
