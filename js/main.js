var game_board = ["p","p","p","p","p","p","p","p","p"];
var player_1 = [];
var player_2 = [];
var who_turn = "p1";

$(document).ready(function(){
    $("html,body").scrollTop(100);
});

// Switches the Player
var changePlayer = function() {
  if (who_turn == "p1") {
    who_turn = "p2"
  }
  else if (who_turn == "p2") {
    who_turn = "p1"
  }
}

// "Marks" a square for a player (X or O!)
var markPlayer = function(b) {
  if (who_turn == "p1") {
    game_board[b - 1] = "x";
  }
  else if (who_turn == "p2") {
    game_board[b - 1] = "o";
  }
}
// Takes the current state of the game_board array and generates each players "score"
// this should be cleared later to avoid a needlessly hefty score array for each player
var populateScoreArrays = function(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] == "x") {
      player_1.push(i);
    }
  }

  for (i = 0; i < array.length; i++) {
    if (array[i] == "o") {
      player_2.push(i);
    }
  }
}

// Clears the score arrays for both players
var clearScoreArrays = function() {
  player_1 = [];
  player_2 = [];
}

// changes game board visuals to let players know that the game is over
var endGame = function() {
  changePlayer();
  $('.board-piece').addClass("game-over");
  // $('.board-piece').addClass("selected");
  console.log(who_turn + " wins!");
  $('.end-card').css("opacity", 0.8);
  $('.end-card').css("z-index", 1);
}

var hightlightWin = function(t, y, u) {
  $('#' + t).addClass("win");
  $('#' + y).addClass("win");
  $('#' + u).addClass("win");
  if (who_turn == "p1") {
    $('.end-text').text("PLAYER 1 WINS");
    $('.end-card').css("background-color", "rgb(0, 102, 204)");
  }
  else if (who_turn == "p2") {
    $('.end-text').text("PLAYER 2 WINS");
    $('.end-card').css("background-color", "rgb(255,0,51)");
  }
}

//
var checkWinConditions = function(pl_arr, player_name) {

  // Top Row win Condition
  if ( (jQuery.inArray(0, pl_arr) > -1 ) && ( jQuery.inArray(1, pl_arr) > -1 ) && ( jQuery.inArray(2, pl_arr) > -1 )) {
    console.log("PLAYER WINS! - TOP ROW!!");
    // hightlightWin();
    endGame();
    hightlightWin("one", "two", "three");
  }
  // middle row win condition
  else if ( (jQuery.inArray(3, pl_arr) > -1 ) && ( jQuery.inArray(4, pl_arr) > -1 ) && ( jQuery.inArray(5, pl_arr) > -1 )) {
    console.log("PLAYER WINS! - MIDDLE ROW!!");
    endGame();
        hightlightWin("four", "five", "six");
  }
  // bottom row win condition
  else if ( (jQuery.inArray(6, pl_arr) > -1) && ( jQuery.inArray(7, pl_arr) > -1 ) && ( jQuery.inArray(8, pl_arr) > -1 )) {
    console.log("PLAYER WINS! - BOTTOM ROW!!");
    endGame();
    hightlightWin("seven", "eight", "nine");
  }
  // left column win condition
  else if ( (jQuery.inArray(0, pl_arr) > -1) && ( jQuery.inArray(3, pl_arr) > -1 ) && ( jQuery.inArray(6, pl_arr) > -1 )) {
    console.log("PLAYER WINS! - LEFT COLUMN!!");
    endGame();
    hightlightWin("one", "four", "seven");
  }
  // middle column win condition
  else if ( (jQuery.inArray(1, pl_arr) > -1) && ( jQuery.inArray(4, pl_arr) > -1 ) && ( jQuery.inArray(7, pl_arr) > -1 )) {
    console.log("PLAYER WINS! - MIDDLE COLUMN!!");
    endGame();
    hightlightWin("two", "five", "eight");
  }
  // right column win condition
  else if ( (jQuery.inArray(2, pl_arr) > -1) && ( jQuery.inArray(5, pl_arr) > -1 ) && ( jQuery.inArray(8, pl_arr) > -1 )) {
    console.log("PLAYER WINS! - RIGHT COLUMN!!");
    endGame();
    hightlightWin("nine", "six", "three");
  }
  // top left to bottom right win condition
  else if ( (jQuery.inArray(0, pl_arr) > -1) && ( jQuery.inArray(4, pl_arr) > -1 ) && ( jQuery.inArray(8, pl_arr) > -1 )) {
    console.log("PLAYER WINS! - DIAGNOLLLLL (starting top, ending bottom)!!");
    endGame();
    hightlightWin("one", "five", "nine");
  }
  // bottom left to top right win condition
  else if ( (jQuery.inArray(2, pl_arr) > -1) && ( jQuery.inArray(4, pl_arr) > -1 ) && ( jQuery.inArray(6, pl_arr) > -1 )) {
    console.log("PLAYER WINS! - bottom left to top right!!");
    endGame();
    hightlightWin("seven", "five", "three");
  }
  else if ($('.selected').length == 9) {
    $('.end-card').css("opacity", 0.8);
    $('.end-card').css("z-index", 1);
    $('.end-text').text("Cat's Game!");
  }
  // console.log("This check was done for " + player_name);
  // console.log("Score Array for Player 1 = " + player_1);
  // console.log("Score Array for Player 2 = " + player_2);
}

var runWinCalculationForBothPlayers = function() {
  checkWinConditions(player_2, "Os");
  checkWinConditions(player_1, "Xs");

}

// $('.board-piece').click(function() {

// });

$('#one').click(function() {
  if ($(this).hasClass("selected") == !true) {
    $(this).addClass("selected");
    $(this).addClass(who_turn);
    markPlayer(1);
    changePlayer();
    populateScoreArrays(game_board);
    runWinCalculationForBothPlayers();
    clearScoreArrays();
  }
  else {
    console.log("this square has been selected already - please select a different square");
  }
});

$('#two').click(function() {
  if ($(this).hasClass("selected") == !true) {
    $(this).addClass("selected");
    $(this).addClass(who_turn);
    markPlayer(2);
    changePlayer();
    populateScoreArrays(game_board);
    runWinCalculationForBothPlayers();
    clearScoreArrays();
  }
  else {
    console.log("this square has been selected already - please select a different square");
  }
});

$('#three').click(function() {
  if ($(this).hasClass("selected") == !true) {
    $(this).addClass("selected");
    $(this).addClass(who_turn);
    markPlayer(3);
    changePlayer();
    populateScoreArrays(game_board);
    runWinCalculationForBothPlayers();
    clearScoreArrays();
  }
  else {
    console.log("this square has been selected already - please select a different square");
  }
});

$('#four').click(function() {
  if ($(this).hasClass("selected") == !true) {
    $(this).addClass("selected");
    $(this).addClass(who_turn);
    markPlayer(4);
    changePlayer();
    populateScoreArrays(game_board);
    runWinCalculationForBothPlayers();
    clearScoreArrays();
  }
  else {
    console.log("this square has been selected already - please select a different square");
  }
});

$('#five').click(function() {
  if ($(this).hasClass("selected") == !true) {
    $(this).addClass("selected");
    $(this).addClass(who_turn);
    markPlayer(5);
    changePlayer();
    populateScoreArrays(game_board);
    runWinCalculationForBothPlayers();
    clearScoreArrays();
  }
  else {
    console.log("this square has been selected already - please select a different square");
  }
});

$('#six').click(function() {
  if ($(this).hasClass("selected") == !true) {
    $(this).addClass("selected");
    $(this).addClass(who_turn);
    markPlayer(6);
    changePlayer();
    populateScoreArrays(game_board);
    runWinCalculationForBothPlayers();
    clearScoreArrays();
  }
  else {
    console.log("this square has been selected already - please select a different square");
  }
});

$('#seven').click(function() {
  if ($(this).hasClass("selected") == !true) {
    $(this).addClass("selected");
    $(this).addClass(who_turn);
    markPlayer(7);
    changePlayer();
    populateScoreArrays(game_board);
    runWinCalculationForBothPlayers();
    clearScoreArrays();
  }
  else {
    console.log("this square has been selected already - please select a different square");
  }
});

$('#eight').click(function() {
  if ($(this).hasClass("selected") == !true) {
    $(this).addClass("selected");
    $(this).addClass(who_turn);
    markPlayer(8);
    changePlayer();
    populateScoreArrays(game_board);
    runWinCalculationForBothPlayers();
    clearScoreArrays();
  }
  else {
    console.log("this square has been selected already - please select a different square");
  }
});

$('#nine').click(function() {
  if ($(this).hasClass("selected") == !true) {
    $(this).addClass("selected");
    $(this).addClass(who_turn);
    markPlayer(9);
    changePlayer();
    populateScoreArrays(game_board);
    runWinCalculationForBothPlayers();
    clearScoreArrays();
  }
  else {
    console.log("this square has been selected already - please select a different square");
  }
});
