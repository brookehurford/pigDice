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

$(document).ready(function(){
  $("#startGame").click(function(){
    if($("#player1NameForm").val() === "" || $("#player2NameForm").val() === "" ){
      alert('please input fields before begining game');
    } else{
      $(".startGame").hide();

      //start game

      //capture values from 2 input forms fields, to equal object.name
      var player1Name = $("input#player1NameForm").val();
      var player2Name = $("input#player2NameForm").val();

      // create initial player objects Constructed by 'Player at line 3'
      var player1 = new Player(player1Name, 0, 0)
      var player2 = new Player(player2Name, 0, 0)
      $("#player1Span").text(player1.name);
      $("#player2Span").text(player2.name);
      $(".pigDiceGame").show();


    }
  });
});
