//BDD Business Logic
var p1DiceRollValue = 0;
var p2DiceRollValue = 0;


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
      var player1 = new Player(player1Name, "", "");
      var player2 = new Player(player2Name, "", "");
      $("#player1Span").text(player1.name);
      $("#player2Span").text(player2.name);
      $(".pigDiceGame").show();

    $("#p1Rollbtn").click(function() {
      var player1 = new Player(player1Name, 0, 0);
      var player2 = new Player(player2Name, 0, 0);
      var p1Disabled = $("#p1Rollbtn, #p1Holdbtn").is(":disabled");
      var p2Disabled = $("#p2Rollbtn, #p2Holdbtn").is(":disabled");
      var diceRoll = pigDice(dice());

      while (player1.totalScore < 100) {
        if (p1Disabled === false) {
          $(".p1CurrentRoll").text(diceRoll);
          $(".player1-curScore").text(p1DiceRollValue += diceRoll);
          // console.log(p1DiceRollValue += diceRoll);
          $("#p1Holdbtn").click(function(){
            $("#p1Rollbtn").prop('disabled', true);
            $("#p1Holdbtn").prop('disabled', true);
            $("#p2Rollbtn").prop('disabled', false);
            $("#p2Holdbtn").prop('disabled', false);
            p1DiceRollValue = 0;
            $(".player1-curScore").text(p1DiceRollValue);
            $(".p1CurrentRoll").text("");
          });

          if(diceRoll === 1){
            $("#p1Holdbtn").prop('disabled', true);
            $("#p1Rollbtn").prop('disabled', true);
            $("#p2Rollbtn").prop('disabled', false);
            $("#p2Holdbtn").prop('disabled', false);
            p1DiceRollValue = 0;
            $(".player1-curScore").text(p1DiceRollValue);
            break;
          } else {
            player1.totalScore = player1.totalScore + 100;
          }
        $(".player1-totalScore").text(player1.totalScore);
        }
      }
    });


    $("#p2Rollbtn").click(function() {
      var player1 = new Player(player1Name, 0, 0);
      var player2 = new Player(player2Name, 0, 0);
      var p1Disabled = $("#p1Rollbtn, #p1Holdbtn").is(":disabled");
      var p2Disabled = $("#p2Rollbtn, #p2Holdbtn").is(":disabled");
      var diceRoll = pigDice(dice());

      while (player2.totalScore < 100) {
        if (p2Disabled === false) {
          $(".p2CurrentRoll").text(diceRoll);
          $(".player2-curScore").text(p2DiceRollValue += diceRoll);
          // console.log(p2DiceRollValue += diceRoll);
          $("#p2Holdbtn").click(function(){
            $("#p2Rollbtn").prop('disabled', true);
            $("#p2Holdbtn").prop('disabled', true);
            $("#p1Rollbtn").prop('disabled', false);
            $("#p1Holdbtn").prop('disabled', false);
            p2DiceRollValue = 0;
            $(".player2-curScore").text(p2DiceRollValue);
            $(".p2CurrentRoll").text("");
          });

          if(diceRoll === 1){
            $("#p2Holdbtn").prop('disabled', true);
            $("#p2Rollbtn").prop('disabled', true);
            $("#p1Rollbtn").prop('disabled', false);
            $("#p1Holdbtn").prop('disabled', false);
            p2DiceRollValue = 0;
            $(".player2-curScore").text(p2DiceRollValue);
            break;
          } else {

            player2.totalScore = player2.totalScore + 100;
          }
        $(".player2-totalScore").text(player2.totalScore);
          // console.log(player2.totalScore);
        }
      }
    });
    }
  });
});
