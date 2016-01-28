//BDD Business Logic
var p1DiceRollValue = 0;
var p2DiceRollValue = 0;


function Player(name, curScore, totalScore){
  this.name = name;
  this.curScore = curScore;
  this.totalScore = totalScore;
}


//prototypes
// Player.prototype.addTotalScore = function(){
//   return this.totalScore = this.totalScore + p1currentScore;
// }

// Might not need ?
Player.prototype.curScoreZero = function(){
  return this.curScore = this.curScore = 0
}
Player.prototype.addTotalScore = function(){
  return this.totalScore = this.totalScore + p1ValueHold;
}

//Random generate a number from 1-6
function dice(){
  return Math.floor(Math.random() * 6) + 1;
}


function pigDice(roll) {
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
    } else {
      $(".startGame").hide();

      //start game by showing player 1 and player 2, and showing the buttons to play the game.

      //capture values from 2 input forms fields, to equal object.name
      var player1Name = $("input#player1NameForm").val();
      var player2Name = $("input#player2NameForm").val();

      // create initial player objects Constructed by 'Player' at line 3.
      var player1 = new Player(player1Name, 0, 0);
      var player2 = new Player(player2Name, 0, 0);
      $("#player1Span").text(player1.name);
      $("#player2Span").text(player2.name);
      $(".pigDiceGame").show();

      // sets variables for roll functions
      // var p1Disabled = $("#p1Rollbtn, #p1Holdbtn").is(":disabled");
      // var p2Disabled = $("#p2Rollbtn, #p2Holdbtn").is(":disabled");
      // var diceRoll = pigDice(dice());
      // var p1currentScore = p1DiceRollValue += diceRoll;



    $("#p1Rollbtn").click(function() {
      // sets variables for roll functions
      var p1Disabled = $("#p1Rollbtn, #p1Holdbtn").is(":disabled");
      var p2Disabled = $("#p2Rollbtn, #p2Holdbtn").is(":disabled");
      var diceRoll = pigDice(dice());
      var p1currentScore = p1DiceRollValue += diceRoll;

      // debugger;
        if (p1Disabled === false) {
          $(".p1CurrentRoll").text(diceRoll);
          $(".player1-curScore").text(p1currentScore);
          console.log(diceRoll, p1currentScore);
        }
        if (diceRoll === 1) {
          $("#p1Holdbtn").prop('disabled', true);
          $("#p1Rollbtn").prop('disabled', true);
          $("#p2Rollbtn").prop('disabled', false);
          $("#p2Holdbtn").prop('disabled', false);
          p1DiceRollValue = 0;
          $(".player1-curScore").text(p1DiceRollValue);
          $(".playersTurnAnimationP2").fadeIn(1000);
          $(".playersTurnAnimationP2").fadeOut(1000);
        }
    });

    $("#p1Holdbtn").click(function(){
      var p1Disabled = $("#p1Rollbtn, #p1Holdbtn").is(":disabled");
      var p2Disabled = $("#p2Rollbtn, #p2Holdbtn").is(":disabled");
      var p1ValueHold = parseInt($(".player1-curScore").text());
      // debugger;
      $("#p1Rollbtn").prop('disabled', true);
      $("#p1Holdbtn").prop('disabled', true);
      $("#p2Rollbtn").prop('disabled', false);
      $("#p2Holdbtn").prop('disabled', false);

      Player.prototype.p1addTotalScore = function(){
        return this.totalScore = this.totalScore + p1ValueHold;
      }

      p1DiceRollValue = 0;
      $(".player1-totalScore").text(player1.p1addTotalScore());
      $(".player1-curScore").text(p1DiceRollValue);
      $(".p1CurrentRoll").text("");
      if(player1.totalScore >= 20){
        alert("You win");
        location.reload();
      }
    });


    $("#p2Rollbtn").click(function() {
      var p1Disabled = $("#p1Rollbtn, #p1Holdbtn").is(":disabled");
      var p2Disabled = $("#p2Rollbtn, #p2Holdbtn").is(":disabled");
      var diceRoll = pigDice(dice());
      var p2currentScore = p2DiceRollValue += diceRoll;


        if (p2Disabled === false) {
          $(".p2CurrentRoll").text(diceRoll);
          $(".player2-curScore").text(p2currentScore);
        }

          if(diceRoll === 1){
            $("#p2Holdbtn").prop('disabled', true);
            $("#p2Rollbtn").prop('disabled', true);
            $("#p1Rollbtn").prop('disabled', false);
            $("#p1Holdbtn").prop('disabled', false);
            p2DiceRollValue = 0;
            $(".playersTurnAnimationP1").fadeIn(1000);
            $(".playersTurnAnimationP1").fadeOut(1000);
            $(".player2-curScore").text(p2DiceRollValue);
          }
    });

    $("#p2Holdbtn").click(function(){
      var pDisabled = $("#p1Rollbtn, #p1Holdbtn").is(":disabled");
      var p2Disabled = $("#p2Rollbtn, #p2Holdbtn").is(":disabled");
      var p2ValueHold = parseInt($(".player2-curScore").text());

      $("#p2Rollbtn").prop('disabled', true);
      $("#p2Holdbtn").prop('disabled', true);
      $("#p1Rollbtn").prop('disabled', false);
      $("#p1Holdbtn").prop('disabled', false);

      Player.prototype.p2addTotalScore = function(){
        return this.totalScore = this.totalScore + p2ValueHold;
      }

      p2DiceRollValue = 0;
      $(".player2-totalScore").text(player2.p2addTotalScore());
      $(".player2-curScore").text(p2DiceRollValue);
      $(".p2CurrentRoll").text("");
      if(player2.totalScore >= 20){
        alert("You win");
        location.reload();
      }

    });




    }
  });
});
