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

      /**********
      ***NOTES****
      $("#p1Rollbtn").prop('disabled', true);
          $("#p1Rollbtn, #p1Holdbtn").is(":disabled") equals true
      **********
      *********/

      //capture values from 2 input forms fields, to equal object.name
      var player1Name = $("input#player1NameForm").val();
      var player2Name = $("input#player2NameForm").val();

      // create initial player objects Constructed by 'Player at line 3'
      var player1 = new Player(player1Name, 0, 0);
      var player2 = new Player(player2Name, 0, 0);
      $("#player1Span").text(player1.name);
      $("#player2Span").text(player2.name);
      $(".pigDiceGame").show();

      // Disables player 2 buttons on start game load
      $("#p2Rollbtn, #p2Holdbtn").prop('disabled', true);
      $("#p1Rollbtn, #p1Holdbtn").prop('disabled', false);

    //
    // $("#p1Rollbtn").click(function() {
    //   var p1Disabled = $("#p1Rollbtn, #p1Holdbtn").is(":disabled");
    //   var p2Disabled = $("#p2Rollbtn, #p2Holdbtn").is(":disabled");
    //   var player1 = new Player(player1Name, 0, 0);
    //   var playerRoll = pigDice(dice());

    $("#p1Rollbtn").click(function() {
      // debugger;
      var player1 = new Player(player1Name, 0, 0);
      var player2 = new Player(player2Name, 0, 0);
      var p1Disabled = $("#p1Rollbtn, #p1Holdbtn").is(":disabled");
      var p2Disabled = $("#p2Rollbtn, #p2Holdbtn").is(":disabled");

      while (player1.totalScore < 100) {
        if (p1Disabled === false) {
          player1.totalScore = player1.totalScore + 100;
        }
        $(".player1-totalScore").text(player1.totalScore);
      }
    });




      // while (player1.totalScore || player2.totalScore < 100) {
      //   var player1 = new Player(player1Name, 0, 0);
      //   var player2 = new Player(player2Name, 0, 0);
      //   var p1Disabled = $("#p1Rollbtn, #p1Holdbtn").is(":disabled");
      //   var p2Disabled = $("#p2Rollbtn, #p2Holdbtn").is(":disabled");
      //   if (p1Disabled === false) {
      //     $("#p1Rollbtn").click(function(){
      //       console.log(player2.totalScore);
      //
      //       player2.totalScore = player2.totalScore + 100;
      //     });
      //   }
      // };
    // });
    }
  });
});
