// onclick play the roll $ pass buttons appear
// first chance goes to player one
// clicks roll n a random number appears.player can roll or pass.if its 1 can't continue to play
// if player passes the count is added to their total Score
// if player gets a 1 no count is added to their total score
// first player to reach 100 points wins


var player1 = "";
var player2 = "";

var rollDice = function() {
  return Math.floor(6 * Math.random()) + 1;
}

function Player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}

// checking for roll of 1 //


Player.prototype.rollone = function() {
  if (this.roll === 1) {
    this.tempscore = 0;
    alert("Ooh" + this.playerName + ",next player please!")
  } else {
    this.tempscore += this.roll;
  }
}

// hold - to tally your rolls to the total and allow next player to play//


Player.prototype.pass = function() {
  this.totalscore += this.tempscore;
  this.tempscore = 0;

}


Player.prototype.winnerCheck = function() {
  if (this.totalscore >= 100) {
    alert("Congratulations," + this.playerName + " You WON!");
  }
}

//new game//
Player.prototype.newGame = function() {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.playerName = "";
}

var clearValues = function() {
  $(".p1").val("");
  $(".p2").val("");
}

//User Interface//
$(document).ready(function() {
  $(".buttons").hide();
  $("button#play_play").click(function(event) {
    player1 = new Player(true);
    player2 = new Player(false);
    $(".buttons").show();

    var p1 = $(".p1").val();
    $("#p1").text(p1);

    var p2 = $(".p2").val();
    $("#p2").text(p2);

    player1.playerName = p1;
    player2.playerName = p2;

  });
  $("button#new_game").click(function(event) {
    $(".buttons").hide();
    clearValues();
    player1.newGame();
    player2.newGame();
    $("#roundTotal1").empty();
    $("#total_score1").empty();
    $("#diece_count1").empty();
    $("#roundTotal2").empty();
    $("#total_score2").empty();
    $("#diece_count2").empty();

    $(".menu").show();
  });

  $("button#play_roll1").click(function(event) {
    player1.roll = rollDice();
    $("#diece_count1").text(player1.roll);
    player1.rollone();
    $("#roundTotal1").text(player1.tempscore);
  });

  $("button#play_roll2").click(function(event) {
    player2.roll = rollDice();
    $("#diece_count2").text(player2.roll);
    player2.rollone();
    $("#roundTotal2").text(player2.tempscore);
  });

  $("button#play_pass1").click(function(event) {
    player1.hold();
    $("#total_score1").text(player1.totalscore);
    $("#roundTotal1").empty();
    $("#diece_count1").empty();
    player1.winnerCheck();
  });

  $("button#play_pass2").click(function(event) {
    player2.hold();
    $("#total_score2").text(player2.totalscore);
    $("#roundTotal2").empty();
    $("#diece_count2").empty();
    player2.winnerCheck();
  });

});
