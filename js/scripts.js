// onclick play the roll $ pass buttons appear
// first chance goes to player one
// clicks roll n a random number appears.player can roll or pass.if its 1 can't continue to play
// if player passes the count is added to their total Score
// if player gets a 1 no count is added to their total score
// first player to reach 100 points wins



var player1="";
var player2="";


var rollDice = function () {


return Math.floor(6*Math.random())+1;
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
alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!")
}
else {
this.tempscore += this.roll;
 }
}


// hold - to tally your rolls to the total and allow next player to play//


Player.prototype.hold = function () {
this.totalscore += this.tempscore;
this.tempscore = 0;


}


// check for 100 - The first player to reach 100 wins!//



Player.prototype.winnerCheck = function () {

if (this.totalscore >= 100) {

alert("Congratulations," + this.playerName + " You WON!");
}


//Refresh just the game and not the players names//
Player.prototype.newGame = function () {
this.roll = 0;
this.tempscore = 0;
this.totalscore = 0;
this.playerName ="";
}


var clearValues = function(){
  $(".p1").val("");
  $(".p2").val("");
}
//User Interface//
$(document).ready(function() {
$(".console").hide();
$("button#play_roll").click(function(event){

player1 = new Player(true);
player2 = new Player(false);
$(".console").show();

var p1name = $(".p1").val();
$("#p1").text(p2);

var p2name = $(".p2").val();
$("#p2").text(p2);

player1.playerName=p1;
player2.playerName=p2;

});
$("button#new_game").click(function(event){
$(".console").hide();
clearValues();
player1.newGame();
player2.newGame();
$("#roundTotal1").empty();
$("#total_score-1").empty();
$("#dice_count1").empty();
$("#roundTotal2").empty();
$("#total_score2").empty();
$("#dice_count1").empty();



$(".menu").show();
});


$("button#player1-roll").click(function(event){
player1.roll = rollDice();
$("#die-roll-1").text(player1.roll);
player1.rollone();


$("#roundTotal-1").text(player1.tempscore);
});


$("button#player2-roll").click(function(event){
player2.roll = rollDice();
$("#die-roll-2").text(player2.roll);
player2.rollone();


$("#roundTotal-2").text(player2.tempscore);
});


$("button#player1-hold").click(function(event){
player1.hold();
$("#total-score-1").text(player1.totalscore);
$("#roundTotal-1").empty();
$("#die-roll-1").empty();


player1.winnerCheck();
});


$("button#player2-hold").click(function(event){
player2.hold();
$("#total-score-2").text(player2.totalscore);
$("#roundTotal-2").empty();
$("#die-roll-2").empty();
player2.winnerCheck();
 });
});
