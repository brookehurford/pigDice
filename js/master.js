//BDD Business Logic

function Player(name, curScore, totalScore){
  this.name = name;
  this.curScore = curScore;
  this.totalScore = totalScore;
}


//prototypes
Player.prototype.addCurScore = function(){
  return this.curScore = this.curScore + playerRoll
}

// Might not need ?
Player.prototype.curScoreZero = function(){
  return this.curScore = this.curScore = 0
}

//Random generate a number from 1-6
function dice(){
  return Math.floor(Math.random() * 6) + 1;
}


var pigDice = function(roll) {
  if (roll === 1) {
    return 1;
  }
  else if (roll === 2) {
    return 2;
  }
  else if (roll === 3) {
    return 3
  }
  else if (roll === 4) {
    return 4
  }
  else if (roll === 5) {
    return 5
  }
  else {
    return 6;
  }
};

//User Logic
